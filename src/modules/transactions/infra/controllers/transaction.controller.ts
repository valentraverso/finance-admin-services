import { NextFunction, Request, Response } from "express";
import { transactionUseCase } from "../../app/usecase/transaction.usecase";
import { createTransactionDTO } from "../../domain/entities/transaction.entity";

export class transactionController {
    constructor(private useCase: transactionUseCase) { }

    async post(req: Request, res: Response, next: NextFunction) {
        const transaction = req.body as createTransactionDTO;

        try {
            const call = this.useCase.post(transaction);

            res.status(200).send({
                data: call
            })
        } catch (err) {
            next(err);
        }
        
        next();
    }
}