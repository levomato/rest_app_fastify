import prisma from "../utils/prisma";
import { createCommentInput } from "./comment.schema";


export async function createComment(data: createCommentInput & { postId: number }) {

    return prisma.comments.create({
        data: {
            content: data.content,
            post: {
                connect: {
                    id: data.postId
                }
            }
        }
    });
}

export async function getCommentsByPostId(postId: number) {
    return prisma.comments.findMany({ where: { postId: postId } })
}