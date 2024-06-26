import chartModel from "../../../../models/chart.schema";
import { IChart } from "../../domain/entities/chart.entity";
import { IChartRepository } from "../../domain/repository/chart.repository";

export default class ChartMongoDB implements IChartRepository{
    async create({ data }: { data: IChart; }): Promise<IChart> {
        const createRecord = await chartModel.create(data);

        return createRecord;
    }

    async getById({ id }: { id: string; }): Promise<IChart | null> {
        const getRecordById = await chartModel.findById(id);

        return getRecordById;
    }

    async getAll(): Promise<IChart[]> {
        const getAll = await chartModel.find({});

        return getAll;
    }
}