import { NextFunction, Request, Response } from "express";
import { transactionUseCase } from "../../application/usecases/transaction.usecase";
import catchHandler from "../../../../shared/services/catchHandler";
import mongoose from "mongoose";
import customError from "../../../../shared/services/error/customError";

export class transactionController {
    constructor(private useCase: transactionUseCase) { }

    async create(req: Request, res: Response, next: NextFunction) {
        const { body: transaction } = req;

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

    async getSpends(req: Request, res: Response, next: NextFunction) {
        const query = req.query;

        try {
            var data: Record<string, string> | null = null;

            if (Object.keys(query).length > 0) {
                if (query.hasOwnProperty("idChart")) {
                    if(!mongoose.isValidObjectId(query.idChart)){
                        customError("NOT_VALID_ID", 400);
                    }

                    data = {
                        idChart: query.idChart as string
                    }
                }
            }




            const getSpends = await this.useCase.getSpendsByMonth({ ...query && { idChart: data!.idChart } });

            res.status(200).send({
                status: true,
                data: getSpends
            })
        } catch (err: any) {
            catchHandler(res, err);
        }

        next();
    }
}