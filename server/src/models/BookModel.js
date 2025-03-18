import mongoose from "mongoose";
const Schema = mongoose.Schema;
const bookSchema = new Schema(
    {
        title: { type: String, required: true }, // Tên sách
        author: { type: String, required: true }, // Tác giả
        description: { type: String, required: true }, // Mô tả sách
        price: { type: Number, required: true }, // Giá sách
        image: { type: String, required: true }, // URL hình ảnh sách
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        }, // Thể loại sách
        stock: { type: Number, required: true, default: 0 }, // Số lượng sách trong kho
        rating: { type: Number, default: 0 }, // Điểm đánh giá trung bình
        promotion: {
            type: Schema.Types.ObjectId,
            ref: "Promotion",
        }, // Khuyến mãi
        reviews: [
            {
                user: { type: Schema.Types.ObjectId, ref: "User" }, // Người đánh giá
                rating: { type: Number, }, // Điểm đánh giá
                comment: { type: String, }, // Nhận xét
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
