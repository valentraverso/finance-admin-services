import CategorieService from "../../application/services/categorie.services";
import ICategorieDatabase from "../../domain/repository/categorie.repository";
import ICategorieService from "../../domain/services/categorie.services";
import MongoDb from "../database/mongodb.db";

class CategorieMaker{
    private repository: ICategorieDatabase;

    constructor(){
        this.repository = new MongoDb();
    }

    service(): ICategorieService{
        return new CategorieService(this.repository);
    }
}

export default new CategorieMaker().service();