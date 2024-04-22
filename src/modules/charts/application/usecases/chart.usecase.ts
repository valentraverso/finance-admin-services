import { IChart } from "../../domain/entities/chart.entity";
import { IChartUseCase } from "../../domain/usecases/chart.usecase";

export default class ChartUseCase implements IChartUseCase{
    async create({ data }: { data: IChart; }): Promise<IChart> {
        
    }
}