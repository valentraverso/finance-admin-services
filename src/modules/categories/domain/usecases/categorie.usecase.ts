import { ICategorie } from "../../../../models/categorie.schema";

export default interface ICategorieUseCase{
    getCategories(): Promise<ICategorie[]>;
}