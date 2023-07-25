import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    accountId: {
        type: String,
        required: true
    }
});

const transactionModel = model('transactions', transactionSchema);
export default transactionModel;