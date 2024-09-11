import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import * as Zod from "zod";

// Controller
import { Controller } from "../Controllers";

export function setGoalCompletionsRoutes(server: FastifyInstance) {
    try {
        server.withTypeProvider<ZodTypeProvider>().route({
            url: '/goals-completions/create',
            method: 'POST',
            schema: {
                body: Zod.object({
                    goalId: Zod.string(),
                })
            },
            handler: async (request, response) => {
                await new Controller().create(request, response);
            }
        })        

        server.withTypeProvider<ZodTypeProvider>().route({
            url: '/goals-completions/remove',
            method: 'DELETE',
            handler: async (request, response) => {
                // await new Controller().getAllPendings(request, response);
            }
        })
    } catch (error) {
        throw error
    }
}