import { FastifyInstance } from "fastify";
import { createCommentHandler, getCommentsHandler } from "./comment.controller";
import { $ref } from "./comment.schema";

async function commentRoutes(server: FastifyInstance) {
    server.post('/', {
        schema: {
            body: $ref('createCommentSchema'),
            response: {
                201: $ref('commentResponseSchema')
            }
        }
    }, createCommentHandler)

    server.get('/', {
        schema: {
            response: {
                200: $ref('commentsResponseSchema')
            }
        }
    }, getCommentsHandler)
}

export default commentRoutes;