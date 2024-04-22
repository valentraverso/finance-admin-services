import { ITransactionEntity, createTransactionDTO } from "../../domain/entities/transaction.entity";
import transactionModel from "../../../../models/transaction.schema";
import { ITransactionRepository } from "../../domain/repository/transaction.repository";

export class TransactionMongoRepository implements ITransactionRepository {
  async post(transaction: createTransactionDTO) {
    const reponse = await transactionModel
      .create(transaction);

    return reponse;
  }

  /**
   * GET
   */

  async getOne({ filters, projection, sort }: { filters: any, projection?: any, sort?: any }) {
    const response = await transactionModel.findOne(filters, projection).sort(sort).exec();

    return response;
  }

  async getAll({ filters, projection, sort }: { filters: any; projection?: any; sort?: any; }): Promise<any> {
    const response = await transactionModel.find(filters, projection).sort(sort).exec();

    return response;
  }

  async getSpendsByMonth({ target }: { target?: string[]}): Promise<ITransactionEntity | ITransactionEntity[] | null> {
    const response = await transactionModel.aggregate([
      {
        $match: {
          type: 0, // Filtra solo los documentos donde 'type' es 0
          ...target && {categorie: {
            $in: target
          }} // Filtar por categorias
        } 
      },
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" }
          },
          amount: { $sum: { $abs: "$amount" } }
        }
      },
      {
        $project: {
          _id: 0, // Excluye el campo _id
          year: "$_id.year",
          month: {
            $switch: {
              branches: [
                { case: { $eq: ["$_id.month", 1] }, then: "January" },
                { case: { $eq: ["$_id.month", 2] }, then: "February" },
                { case: { $eq: ["$_id.month", 3] }, then: "March" },
                { case: { $eq: ["$_id.month", 4] }, then: "April" },
                { case: { $eq: ["$_id.month", 5] }, then: "May" },
                { case: { $eq: ["$_id.month", 6] }, then: "June" },
                { case: { $eq: ["$_id.month", 7] }, then: "July" },
                { case: { $eq: ["$_id.month", 8] }, then: "August" },
                { case: { $eq: ["$_id.month", 9] }, then: "September" },
                { case: { $eq: ["$_id.month", 10] }, then: "October" },
                { case: { $eq: ["$_id.month", 11] }, then: "November" },
                { case: { $eq: ["$_id.month", 12] }, then: "December" }
              ],
              default: "Unknown"
            }
          },
          amount: 1
        }
      },
      {
        $sort: { year: 1, month: 1 }
      }
    ]);

    return response;
  }
}

export default new TransactionMongoRepository();