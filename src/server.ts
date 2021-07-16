import app from "./app";
import * as dotenv from "dotenv"

/**
 * Loading configuration form .env
 */
dotenv.config({path:__dirname+"/../.env" })
/**
 * Handling unhandled Rejection or any unhandled error
 */
process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

/**
 * Starting the application to run at the given address
 */
app.ready();
app.listen( process.env.APP_PORT || 3000, (err, address) => {
    if(err){
        throw new Error(err.message);
    } else {
        console.log(`Application has started running at ${address}`);
    }
})


/**
 * Handling Special termination command
 */
for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, () =>
        app.close().then((err) => {
            console.log(`close application on ${signal}`);
            process.exit(err ? 1 : 0);
        }),
    );
}