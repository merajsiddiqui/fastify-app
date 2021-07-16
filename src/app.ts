import "reflect-metadata"
import {Server, IncomingMessage, ServerResponse} from 'http';
import {FastifyError, FastifyReply, FastifyRequest, RouteOptions} from "fastify";
import * as Fastify from "fastify"
import * as FastifyTypeORMPlugin from 'fastify-typeorm-plugin';
import {SalesRoutes} from "./routes";
import {createConnection} from "typeorm";


class App {
    /**
     * @public app
     */
    public app: Fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;

    /**
     * @method Constructor
     */
    constructor() {
        this.app = Fastify.default({
            logger: {
                level: process.env.LOG_LEVEL,
            }
        });
        this.enableRoutes();
        this.enableErrorHandler();
    }

    /**
     *  This method add all routes to the application
     * @private enableRoutes
     */
    private enableRoutes(): void {
        SalesRoutes.forEach((salesRoute: RouteOptions) => {
            this.app.route(salesRoute);
        })
    }

    /**
     * This method enable error handling for routes
     * @private enableErrorHandler
     */
    private enableErrorHandler(): void {
        this.app.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
            if (error.validation) {
                reply.status(400).send(error.validation);
            }
        });
    }

    /**
     * This method is used to connect to postgreSequel
     * @private connectPostgreSequel
     */
    private async connectPostgreSequel(): Promise<void> {
        // const ORMConfigurations = {};
        // const connection = await createConnection(ORMConfigurations)
        // this.app.register(FastifyTypeORMPlugin, {connection});
    }
}

export default new App().app;