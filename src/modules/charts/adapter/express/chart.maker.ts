import ChartService from "../../application/services/chart.service";
import { IChartRepository } from "../../domain/repository/chart.repository";
import IChartService from "../../domain/service/chart.service";
import ChartMongoDB from "../database/mongodb.db";

class ChartMaker{
    private chartRepository: IChartRepository;

    constructor(){
        this.chartRepository = new ChartMongoDB();
    }

    service(): IChartService{
        return new ChartService(this.chartRepository); 
    }
}

export default  new ChartMaker().service();