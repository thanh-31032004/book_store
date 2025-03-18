import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: { type: String },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        avatar: { type: String },
        fullName: { type: String },
        address: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = mongoose.model("users", UserSchema);

export default User;
