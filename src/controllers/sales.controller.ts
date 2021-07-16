import {FastifyRequest, FastifyReply} from 'fastify';

export namespace SalesController {

    export const salesReport = async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send({name: "meraj"});
    }

    export const createSalesData = async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200). send({
            message: "report successfully saved",
            data: {
                id : "1",
                name: "blah"
            }
        })
    }
}