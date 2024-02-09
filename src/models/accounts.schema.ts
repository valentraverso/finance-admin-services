import { Schema, Types, model } from "mongoose";

const accountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    entity: {
        type: String,
        required: false
    },
    balance: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        default: 1,
        required: true
    }
});

const accountModel = model("accounts", accountSchema);
export default accountModel;