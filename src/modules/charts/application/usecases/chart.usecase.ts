import chartMaker from "../../adapter/express/chart.maker";
import { IChart } from "../../domain/entities/chart.entity";
import { IChartUseCase } from "../../domain/usecases/chart.usecase";

export default class ChartUseCase implements IChartUseCase{
    async create({ data }: { data: IChart; }): Promise<IChart> {
        const createRecord = await chartMaker.create({data});

        return createRecord;
    }

    async getById({ id }: { id: string; }): Promise<IChart | null> {
        const getRecordById = await chartMaker.getById({id});

        return getRecordById;
    }

    async getAll(): Promise<IChart[]> {
        const getAll = await chartMaker.getAll();

        return getAll;
    }
}