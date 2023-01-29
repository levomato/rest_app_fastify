import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePostInput } from "./post.schema";
import { createPost, getPostById, getPosts } from "./post.service"
export async function createPostHandler(request: FastifyRequest<{ Body: CreatePostInput }>) {
    const post = await createPost({
        ...request.body
    })

    return post;
}

export async function getPostsHandler() {
    const posts = await getPosts();
    return posts
}

export async function getPostHandler(request: FastifyRequest<{ Params: { postId: number } }>) {
    const postId = request.params.postId;
    const post = await getPostById(postId)
    return post
}