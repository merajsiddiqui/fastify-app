import {RouteOptions} from 'fastify';
import {SalesController} from "../controllers/sales.controller";
import {CreateSalesDataSchema, GetSalesReportSchema} from "../schemas/sales.schema";

export const SalesRoutes: RouteOptions[] = [
    {method: "GET", schema: GetSalesReportSchema, url: "/stats/:statType", handler: SalesController.salesReport},
    {method: "POST", schema: CreateSalesDataSchema, url: "/sales/create", handler: SalesController.createSalesData}
];