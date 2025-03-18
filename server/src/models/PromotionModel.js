import mongoose from "mongoose";
const Schema = mongoose.Schema;
const promotionSchema = new Schema({
  discount: { type: Number, required: true }, // % giảm giá
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
},
  {
    timestamps: true,
    versionKey: false,
  });

const Promotion = mongoose.model("Promotion", promotionSchema);
export default Promotion;
