import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
