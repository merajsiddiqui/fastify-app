export default {
    entities: [
        "src/database/entities/**/*.entity.ts",
        "dist/database/entities/**/*.entity.js",
    ],
    migrations: [
        "src/database/migrations/**/*.ts",
        "dist/database/migrations/**/*.js",
    ],
    seeds: [`src/database/seeds/*.seed.ts`],
    cli: {
        migrationsDir: 'src/database/migrations',
        entitiesDir: 'src/database/entities',
    },
};