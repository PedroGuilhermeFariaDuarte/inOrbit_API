import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";

// Modules Routes
import { setGoalRoutes } from "app/modules/Goal/Routes";
import { setGoalCompletionsRoutes } from "app/modules/GoalCompletion/Routes";


const APP_STATEMENT = fastify({
    logger: true,
    exposeHeadRoutes: true,
}).withTypeProvider<ZodTypeProvider>()

APP_STATEMENT.setValidatorCompiler(validatorCompiler);
APP_STATEMENT.setSerializerCompiler(serializerCompiler);

// Routes
setGoalRoutes(APP_STATEMENT);
setGoalCompletionsRoutes(APP_STATEMENT);

APP_STATEMENT.listen({
    port: 3333
}).then(() => {
    console.log('The HTTP Server is running on port 3333')

    console.log(APP_STATEMENT.printRoutes({
        includeMeta: true
    }))
})