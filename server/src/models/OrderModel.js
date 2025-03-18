import mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        payment: {
            type: String,
            enum: ["COD", "Credit Card", "PayPal", "VNPay", "Momo"],
            default: "COD",
            required: true
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ["Pending", "Completed", "Failed"],
            default: "Pending"
        },
        products: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
    },

    {
        timestamps: true,
        versionKey: false,
    }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
