import { Schema, Types, model } from "mongoose";

const accountSchema = new Schema({
    accountNickname: {
        type: String,
        required: false
    },
    currency: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    providerName: {
        type: String,
        required: false
    },
    accountOwner: {
        type: Types.ObjectId,
        required: false
    },
    location: {
        type: String,
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