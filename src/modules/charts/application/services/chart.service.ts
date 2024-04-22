import { IChart } from "../../domain/entities/chart.entity";
import { IChartRepository } from "../../domain/repository/chart.repository";
import IChartService from "../../domain/service/chart.service";

export default class ChartService implements IChartService{
    constructor(private chartRepository: IChartRepository){}

    async create({ data }: { data: IChart; }): Promise<IChart> {
        const createRecord = await this.chartRepository.create({data});

        return createRecord;
    }

    async getById({ id }: { id: string; }): Promise<IChart | null> {
        const getRecordById = await this.chartRepository.getById({id: id});

        return getRecordById;
    }

    async getAll(): Promise<IChart[]> {
        const getAll = await this.chartRepository.getAll();

        return getAll;
    }
}