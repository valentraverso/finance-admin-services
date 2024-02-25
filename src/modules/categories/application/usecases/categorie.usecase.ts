import { ICategorie } from "../../../../models/categorie.schema";
import categorieMaker from "../../adapter/express/categorie.maker";
import ICategorieUseCase from "../../domain/usecases/categorie.usecase";

class CategorieUseCase implements ICategorieUseCase{
    async getCategories(): Promise<ICategorie[]> {
        const getCategories = await categorieMaker.getAll({filter: {}});

        if(!getCategories){
            throw new Error("Categories not found.")
        }

        return getCategories;
    }
}

export default new CategorieUseCase();