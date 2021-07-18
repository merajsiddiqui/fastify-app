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
 * Sales Data Response format
 */
const salesDataResponse = {
    type: "object",
    properties: {
        id: {type: "number"},
        username: {type: "string"},
        amount: {type: "number"},
        date: {type: "string"}
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
            items: {
                type: "object",
                properties: {
                    saleshour: {type: "string"},
                    salesday: {type: "string"},
                    salesdate:  {type: "string"},
                    sales: {type: "number"}
                }
            }
        },
        404: ErrorResponseSchema,
        500: ErrorResponseSchema,
    }
}

export const SalesListDataSchema: FastifySchema = {
    response: {
        200: {
            type: "array",
            items: salesDataResponse
        },
        404: ErrorResponseSchema,
        500: ErrorResponseSchema
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
        },
        required: ["username", "amount"]
    },
    response: {
        200: {
            type: "object",
            properties: {
                message: {type: "string"},
                data: salesDataResponse
            }
        },
        404: ErrorResponseSchema,
        500: ErrorResponseSchema
    }
}