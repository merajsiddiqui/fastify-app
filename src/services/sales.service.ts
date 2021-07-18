import {getRepository} from "typeorm";
import {SalesEntity} from "../databases/entities/sales.entity"

export namespace SalesService {
    export const calculateStats = async (statType: string): Promise<any> => {
        const salesRepository = getRepository(SalesEntity)
        const reportEndDate = new Date()
        let reportStartDate = new Date()
        let querySelector:any
        switch (statType) {
            case "weekly":
                reportStartDate.setDate(reportEndDate.getDate() - 7)
                querySelector = {
                    select: [
                        `sum(amount) as sales`,
                        `to_char(date, 'Day') as salesDay`
                    ],
                    groupBy: 'salesDay'
                }
                break
            case "monthly":
                reportStartDate.setDate(reportEndDate.getDate() - 30)
                querySelector = {
                    select: [
                        `sum(amount) as sales`,
                        `DATE_TRUNC('day', date) as salesDate`
                    ],
                    groupBy: 'salesDate'
                }
                break
            case "daily":
            default:
                querySelector = {
                    select: [
                        `sum(amount) as sales`,
                        `to_char(date, 'HH12:00:AM') as salesHour`
                    ],
                    groupBy: 'salesHour'
                }
                break

        }
        reportStartDate.setHours(0, 0, 0) // going to start from 12:00 AM
        return  await salesRepository.createQueryBuilder()
            .select(querySelector.select)
            .where("date BETWEEN :startDate AND :endDate", {
                startDate: reportStartDate.toISOString(),
                endDate: reportEndDate.toISOString()
            }).groupBy(querySelector.groupBy)
            .cache(false) // specifically disabling cache
            .getRawMany();
    }

    export const createNewSalesData = async (salesData: any): Promise<any> => {
        const salesRepository = getRepository(SalesEntity)
        const sales = await salesRepository.insert({
            userName: salesData.username,
            amount: salesData.amount,
            date: salesData.date
        })
        return sales.generatedMaps[0]

    }

    export const listSalesReport = async (): Promise<SalesEntity[]> => {
        const salesRepository = getRepository(SalesEntity)
        return await salesRepository.find()
    }
}