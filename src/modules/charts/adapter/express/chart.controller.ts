import { NextFunction, Request, Response } from "express";
import catchHandler from "../../../../shared/services/catchHandler";
import { IChartUseCase } from "../../domain/usecases/chart.usecase";

export default class ChartController{
    constructor(private chartUseCase: IChartUseCase){}

    async create(req: Request, res: Response, next: NextFunction){
        const data = req.body;

        try{
            const createRecord = await this.chartUseCase.create({data});

            res.status(200).send({
                status: true,
                msg: "SUCCESSFULLY_CREATED",
                data: createRecord,
            })
        }catch(err: any){
            catchHandler(res, err);
        }

        next();
    }
}