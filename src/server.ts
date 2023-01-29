import Fastify from "fastify";
import postRoutes from "./post/post.routes";
import { postSchemas } from "./post/post.schema";

function buildServer() {
    const server = Fastify();

    for (const schema of [...postSchemas]) {
        server.addSchema(schema);
    }

    server.register(postRoutes, { prefix: "api/posts" })

    return server
}

export default buildServer;