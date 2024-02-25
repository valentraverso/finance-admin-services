import { ICategorie } from "../../../../models/categorie.schema";
import ICategorieDatabase from "../../domain/repository/categorie.repository";
import ICategorieService from "../../domain/services/categorie.services";

export default class CategorieService implements ICategorieService{
    private repository: ICategorieDatabase;

    constructor(repository: ICategorieDatabase){
        this.repository = repository;
    }

    async getAll({ filter, projection, sort }: { filter: any; projection: any; sort: any; }): Promise<ICategorie[] | null> {
        return await this.repository.getAll({filter, projection, sort});
    }
}