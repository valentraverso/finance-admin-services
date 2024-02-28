import { Schema, Types, model } from "mongoose";

interface ITransaction {
    _id?: Types.ObjectId;
    idAccount: Types.ObjectId;
    amount: Float32Array;
    balance: Float32Array;
    type: Number;
    categorie: string;
    description: String;
    date: Date;
}

const transactionSchema = new Schema<ITransaction>({
    amount: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    idAccount: {
        type: Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
});

const transactionModel = model('transactions', transactionSchema);
export default transactionModel;