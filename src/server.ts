import Fastify from "fastify";
import { FastifyZod } from "fastify-zod";
import commentRoutes from "./comment/comment.routes";
import { commentSchemas } from "./comment/comment.schema";
import postRoutes from "./post/post.routes";
import { postSchemas } from "./post/post.schema";

const models = [...postSchemas, ...commentSchemas]

function buildServer() {
    const server = Fastify();

    for (const schema of models) {
        server.addSchema(schema);
    }

    server.register(postRoutes, { prefix: "api/posts" })
    server.register(commentRoutes, { prefix: "api/posts/:id/comments" })

    return server
}

export default buildServer;