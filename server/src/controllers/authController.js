import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel";
import ApiError from "../utils/ApiErrors";
import { getUserByEmail } from "../services/user";
import { registerValidation } from "../validations/auth";
import { loginValidation } from "../validations/auth";

class AuthController {
    async register(req, res, next) {
        try {
            const { email, username, password } = req.body;
            const { error } = registerValidation.validate(req.body);
            if (error) {
                const errors = error.details.map((err) => err.message).join(", ");
                throw new ApiError(StatusCodes.BAD_REQUEST, errors);
            }
            const emailExist = await getUserByEmail(email);
            if (emailExist)
                throw new ApiError(StatusCodes.BAD_REQUEST, "Email da duoc dang ky");
            const hashPassword = await bcryptjs.hash(password, 10);
            const user = await User.create({
                email,
                username,
                password: hashPassword,
            });
            // b4 remove password in res
            res.status(StatusCodes.OK).json({
                message: "Create Done",
                data: { ...user.toObject(), password: undefined },
            });
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const { error } = loginValidation.validate(req.body);
            if (error) {
                const errors = error.details.map((err) => err.message).join(", ");
                throw new ApiError(StatusCodes.BAD_REQUEST, errors);
            }
            const checkUser = await getUserByEmail(email);
            if (!checkUser)
                throw new ApiError(StatusCodes.BAD_REQUEST, "Tai khoan ko hop le");

            const checkPassword = await bcryptjs.compare(
                password,
                checkUser.password
            );
            if (!checkPassword)
                throw new ApiError(StatusCodes.BAD_REQUEST, "Tai khoan ko hop le");

            const token = jwt.sign({ id: checkUser._id }, "process.env.SECRET_KEY", {
                expiresIn: "1w",
            });
            res.status(StatusCodes.OK).json({
                message: "Login ok",
                user: { ...checkUser.toObject(), password: undefined },
                token,
            });
        } catch (error) {
            next(error);
        }
    }
}

export default AuthController;
