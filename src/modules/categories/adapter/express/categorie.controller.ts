import { NextFunction, Request, Response } from "express";
import categorieUsecase from "../../application/usecases/categorie.usecase";

export default class CategorieController{
    async getAll(req: Request, res: Response, next: NextFunction){
        try{
            const response = await categorieUsecase.getCategories();

            res.status(200).send({
                status: true,
                msg: "Account successfull created",
                data: response
            });
        }catch(e: any){
            res.status(500).send({
                status: false,
                msg: "There was an error."
            })
        }

        next();
    }
}