import { StatusCodes } from "http-status-codes";
import Promotion from "../models/PromotionModel.js";
import ApiError from "../utils/ApiErrors.js";

class PromotionsController {
    // GET /promotions
    async getAllPromotions(req, res, next) {
        try {
            const promotions = await Promotion.find();
            res.status(StatusCodes.OK).json(promotions);
        } catch (error) {
            next(error);
        }
    }

    // GET /promotions/:id
    async getPromotionDetail(req, res, next) {
        try {
            const promotion = await Promotion.findById(req.params.id);
            if (!promotion) throw new ApiError(404, "Promotion Not Found");

            res.status(StatusCodes.OK).json(promotion);
        } catch (error) {
            next(error);
        }
    }

    // POST /promotions
    async createPromotion(req, res, next) {
        try {
            const newPromotion = await Promotion.create(req.body);
            res.status(StatusCodes.CREATED).json({
                message: "Create Promotion Successfully",
                data: newPromotion,
            });
        } catch (error) {
            next(error);
        }
    }

    // PUT /promotions/:id
    async updatePromotion(req, res, next) {
        try {
            const updatedPromotion = await Promotion.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedPromotion) throw new ApiError(404, "Promotion Not Found");

            res.status(StatusCodes.OK).json({
                message: "Update Promotion Successfully",
                data: updatedPromotion,
            });
        } catch (error) {
            next(error);
        }
    }

    // DELETE /promotions/:id
    async deletePromotion(req, res, next) {
        try {
            const deletedPromotion = await Promotion.findByIdAndDelete(req.params.id);
            if (!deletedPromotion) throw new ApiError(404, "Promotion Not Found");

            res.status(StatusCodes.OK).json({
                message: "Delete Promotion Successfully",
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new PromotionsController();
