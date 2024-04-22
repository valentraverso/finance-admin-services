import { NextFunction, Request, Response } from "express";
import { transactionUseCase } from "../../application/usecases/transaction.usecase";

export class transactionController {
    constructor(private useCase: transactionUseCase) { }

    async create(req: Request, res: Response, next: NextFunction) {
        const {body: transaction} = req;

        try {
            const create = await this.useCase.create(transaction);

            res.status(200).send({
                status: true,
                data: create
            });
        } catch (err) {
            console.log(err);
        }

        next();
    }
    
    async getSpends(req: Request, res: Response, next: NextFunction){
        try{
            const getSpends = await this.useCase.getSpendsByMonth();

            res.status(200).send({
                status: true,
                data: getSpends
            })
        }catch(err: any){
            res.status(500).send({
                status: false,
                message: "There was an error -> " + err.message
            })
        }

        next();
    }
}