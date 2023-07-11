import { Schema, Types } from "mongoose";

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
        type: "bank" || "cash",
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