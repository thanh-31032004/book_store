const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freeShipSchema = new Schema({
    code: { type: String, unique: true, required: true }, // Mã Free Ship
    minOrderAmount: { type: Number, required: true }, // Giá trị đơn hàng tối thiểu để áp dụng
    expiryDate: { type: Date, required: true }, // Ngày hết hạn
    status: { type: String, enum: ["Active", "Expired"], default: "Active" }, // Trạng thái mã
});

module.exports = mongoose.model("FreeShipCode", freeShipSchema);
