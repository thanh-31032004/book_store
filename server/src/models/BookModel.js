import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: { type: String, required: true, trim: true }, // Tên sách
        author: { type: String, required: true, trim: true }, // Tác giả
        description: { type: String, required: true, trim: true }, // Mô tả sách
        price: { type: Number, required: true, min: 0 }, // Giá sách (không thể âm)
        image: { type: String, required: true, trim: true }, // URL hình ảnh sách
        category: { type: Schema.Types.ObjectId, ref: "Category", required: true }, // Thể loại sách (bắt buộc)
        stock: { type: Number, required: true, default: 0, min: 0 }, // Số lượng sách trong kho (không thể âm)
        rating: { type: Number, default: 0, min: 0, max: 5 }, // Điểm đánh giá trung bình (0 - 5)
        // promotion: { type: Schema.Types.ObjectId, ref: "Promotion", default: null }, // Khuyến mãi (có thể null)
        reviews: [
            {
                user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người đánh giá (bắt buộc)
                rating: { type: Number, required: true, min: 1, max: 5 }, // Điểm đánh giá (1 - 5)
                comment: { type: String, trim: true }, // Nhận xét
            },
        ],
    },
    {
        timestamps: true, // Thêm `createdAt` và `updatedAt`
        versionKey: false, // Ẩn __v của Mongoose
    }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
