import {FastifyRequest, FastifyReply} from 'fastify';
import {SalesService} from "../services/sales.service";

export namespace SalesController {
    /**
     * @description This method calculates the stats for the sales reports
     * @method salesReport
     * @param request
     * @param reply
     */
    export const salesReport = async (request: FastifyRequest, reply: FastifyReply) => {
        const requestParams: any = request.params
        const salesStats = await SalesService.calculateStats(requestParams.statType)
        return reply.status(200).send(salesStats);
    }
    /**
     * @description This method inserts data into sales table
     * @method createSalesData
     * @param request
     * @param reply
     */
    export const createSalesData = async (request: FastifyRequest, reply: FastifyReply) => {
        const response = await SalesService.createNewSalesData(request.body)
        const data: any = request.body
        data.id = response.id
        reply.status(200).send({
            message : "Report successfully added",
            data: data
        })
    }
    /**
     * @description This method list all the sales data from the sales table
     * @method listAllSalesData
     * @param request
     * @param reply
     */
    export const listAllSalesData = async (request: FastifyRequest, reply: FastifyReply) => {
        const salesList = await SalesService.listSalesReport()
        reply.status(200).send(salesList)
    }
}