import mongoose from "mongoose";
import { MONGO_URI } from "../../../config/config";

export default mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`Connected to DB`)
    })
    .catch(err => {
        console.error(err.message);
    });