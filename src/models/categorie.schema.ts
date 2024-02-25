import { Schema, Types, model } from "mongoose"

export interface ICategorie {
    _id?: Types.ObjectId;
    type: number;
    categories: Object;
}

const categorieSchema = new Schema({
    type: {
        type: Number,
        required: true
    },
    categories: {
        type: Object,
        required: true
    }
});

const categorieModel = model("categorie", categorieSchema);

export default categorieModel;