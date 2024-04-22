import { Schema, model } from "mongoose";
import { IChart } from "../modules/charts/domain/entities/chart.entity";

const chartSchema = new Schema<IChart>({
    label: {
        type: String,
        maxlength: [50, "The maximium length is 50 characters"],
        required: [true, "Please set the label"]
    },
    description: {
        type: String,
        maxlength: [500, "The maximium length is 500 characters"],
    },
    type: {
        type: Number,
        required: [true, "Please set the type of the chart"]
    },
    target: {
        type: [Number],
        required: [true, "Please set the target of the chart"]
    }
})

const chartModel = model("charts", chartSchema);

export default chartModel;