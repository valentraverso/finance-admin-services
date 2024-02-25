import categorieModel, { ICategorie } from "../../../../models/categorie.schema";
import ICategorieDatabase from "../../domain/repository/categorie.repository";

export default class MongoDb implements ICategorieDatabase{
    async getAll({ filter, projection, sort }: { filter: any; projection: any; sort: any; }): Promise<ICategorie[] | null> {
        const response = await categorieModel.find(filter, projection).sort(sort);

        return response;
    }
}