import {FastifySchema} from "fastify";

/**
 * ErrorResponseSchema for all types of error
 */
const ErrorResponseSchema = {
    type: "object",
    properties: {
        error: {type: "string"},
        code: {type: "number"}
    }
}

/**
 * GetSalesReportSchema schema for request and response for the stats api endpoint
 */
export const GetSalesReportSchema: FastifySchema = {
    params: {
        statType: {type: "string", enum: ["daily", "weekly", "monthly"]}
    },
    response: {
        200: {
            type: "array",
            item: {
                type: "object",
                properties: {
                    hour: {type: "string"},
                    day: {type: "string"},
                    date: {type: "string"},
                    sales: {type: "number"}
                }
            }
        },
        404: ErrorResponseSchema,
        500: ErrorResponseSchema,
    }
}

/**
 * CreateSalesDataSchema Schema for the creation of data of sales report
 */
export const CreateSalesDataSchema: FastifySchema = {
    body: {
        type: "object",
        properties: {
            username: {type: "string", minLength: 5, maxLength: 20},
            amount: {type: "number", min: 1, max: 10000000},
            date: {}
        }
    },
    response: {
        200: {
            type: "object",
            properties: {
                message: {type: "string"},
                userId: {type: "number"}
            }
        },
        400: ErrorResponseSchema,
        500: ErrorResponseSchema
    }
}