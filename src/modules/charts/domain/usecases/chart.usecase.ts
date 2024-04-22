import { IChart } from "../entities/chart.entity";

export interface IChartUseCase{
    create({data}:{data: IChart}): Promise<IChart>;

    getById({id}: {id: string}): Promise<IChart | null>;
    getAll(): Promise<IChart[]>;
}