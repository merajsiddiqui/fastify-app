import {FastifyRequest, FastifyReply} from 'fastify';

export namespace SalesController {
    const UserCreationSuccessResponse = {
        message: "user created successfully",
        code : 201
    }
    export const salesReport = async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send({name: "meraj"});
    }

    export const createSalesData = async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200). send()
    }
}