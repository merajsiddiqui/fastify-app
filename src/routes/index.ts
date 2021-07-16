import {RouteOptions} from 'fastify';
import {SalesController} from "../controllers/sales.controller";
import {CreateSalesDataSchema, GetSalesReportSchema, SalesListDataSchema} from "../schemas/sales.schema";

export const SalesRoutes: RouteOptions[] = [
    {method: "GET", schema: GetSalesReportSchema, url: "/stats/:statType", handler: SalesController.salesReport},
    {method: "GET", schema: SalesListDataSchema, url: "/sales/list", handler: SalesController.listAllSalesData},
    {method: "POST", schema: CreateSalesDataSchema, url: "/sales/create", handler: SalesController.createSalesData}
];