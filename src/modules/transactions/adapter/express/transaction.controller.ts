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
}