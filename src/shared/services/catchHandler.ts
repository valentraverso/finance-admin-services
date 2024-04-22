import { Response } from "express";

/**
 * 
 * @param res - The response object of the controller
 * @param Ex - Error from catch
 */
export default function catchHandler(res: Response, Ex: { message: string, statusCode: number }) {
    console.log(Ex)
    if (Ex.hasOwnProperty("statusCode")) {
        res.status(Ex.statusCode).send({
            status: false,
            msg: Ex.message
        });
    } else {
        res.status(500).send({
            status: false,
            msg: "There was a several error."
        });
    }
}