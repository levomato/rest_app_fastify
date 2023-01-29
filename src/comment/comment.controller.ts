import { FastifyRequest, RequestParamsDefault } from "fastify";
import { createPost } from "../post/post.service";
import { createCommentInput } from "./comment.schema";
import { createComment, getCommentsByPostId } from "./comment.service";


export async function createCommentHandler(request: FastifyRequest<{ Body: createCommentInput, Params: { id: string } }>) {

    const postId = parseInt(request.params.id)

    const comment = await createComment({
        ...request.body,
        postId: postId
    })

    return comment;
}

export async function getCommentsHandler(request: FastifyRequest<{ Params: { postId: number } }>) {
    const comments = await getCommentsByPostId(request.params.postId);
    return comments;
}

