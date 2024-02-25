import { ICategorie } from "../../../../models/categorie.schema";

export default interface ICategorieDatabase{
    getAll({filter, projection, sort}: {filter: any, projection: any, sort: any}): Promise<ICategorie[] | null>;
}