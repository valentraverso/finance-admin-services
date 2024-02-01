import { NextFunction, Request, Response } from "express";
import { transactionUseCase } from "../../application/transaction.usecase";
import { createTransactionDTO } from "../../domain/entities/transaction.entity";

export class transactionController {
    constructor(private useCase: transactionUseCase) { }

    async create(req: Request, res: Response, next: NextFunction) {
        const transaction = req.body as createTransactionDTO;

        try {
            const create = this.useCase.create(transaction);

            res.status(200).send({
                status: true,
                data: create
            })
        } catch (err) {
            next(err);
        }

        next();
    }
}