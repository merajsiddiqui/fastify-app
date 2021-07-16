import {FastifyRequest, FastifyReply} from 'fastify';
import {SalesService} from "../services/sales.service";

export namespace SalesController {

    export const salesReport = async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send({name: "meraj"});
    }

    export const createSalesData = async (request: FastifyRequest, reply: FastifyReply) => {
        await SalesService.createNewSalesData(request.body)
        reply.status(200).send(request.body)
    }

    export const listAllSalesData = async (request: FastifyRequest, reply: FastifyReply) => {
        const salesList = SalesService.listSalesReport()
        reply.send(200).send(salesList)
    }
}