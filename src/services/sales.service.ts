import {getRepository} from "typeorm";
import {SalesEntity} from "../databases/entities/sales.entity"

export namespace SalesService {

    export const calculateStats = async (statType: string): Promise<any> => {
        const salesRepository = getRepository(SalesEntity)
        let data = null;
        switch (statType) {
            case "daily":
                data = await salesRepository.find()
                break;
            case "weekly":
                data = await salesRepository.find()
                break
            case "monthly":
                data = await salesRepository.find()
                break
            default:
                break
        }
        if(data == null){
            return  []
        }
    }

    export const createNewSalesData = async (salesData: any): Promise<any> => {
        const salesRepository = getRepository(SalesEntity)
        return await salesRepository.insert({
            userName: salesData.username,
            amount: salesData.amount,
            date: salesData.date
        })

    }

    export const listSalesReport = async (): Promise<SalesEntity[]> => {
        const salesRepository = getRepository(SalesEntity)
        return await salesRepository.find()
    }
}