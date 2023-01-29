import { FastifyInstance } from "fastify";
import { createPostHandler, getPostHandler, getPostsHandler, updatePostHandler } from "./post.controller";
import { $ref } from "./post.schema";
import { getPostById } from "./post.service";

async function postRoutes(server: FastifyInstance) {
    server.post('/', {
        schema: {
            body: $ref('createPostSchema'),
            response: {
                201: $ref('postResponseSchema')
            }
        }
    }, createPostHandler)

    server.get('/', {
        schema: {
            response: {
                200: $ref('postsResponseSchema')
            }
        }
    }, getPostsHandler)

    server.get('/:id', {
        schema: {
            response: {
                200: $ref('postResponseSchema')
            }
        }
    }, getPostHandler)

    server.put("/:id", {
        schema: {
            body: $ref('updatePostSchema'),
            response: {
                200: $ref('postResponseSchema')
            }
        }
    }, updatePostHandler)
}

export default postRoutes;