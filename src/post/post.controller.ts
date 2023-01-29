import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePostInput, UpdatePostInput } from "./post.schema";
import { createPost, getPostById, getPosts, updatePostById } from "./post.service"
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

export async function updatePostHandler(request: FastifyRequest<{ Body: UpdatePostInput, Params: { id: string } }>) {
    const postId = parseInt(request.params.id);
    const post = await updatePostById(postId, { ...request.body })
    return post
}