import { IChart } from "../../domain/entities/chart.entity";
import { IChartRepository } from "../../domain/repository/chart.repository";

export default class ChartMongoDB implements IChartRepository{
    async create({ data }: { data: IChart; }): Promise<IChart> {
        const createRecord = await
    }
}