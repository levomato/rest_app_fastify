import prisma from "../utils/prisma";
import { CreatePostInput } from "./post.schema";

export async function createPost(data: CreatePostInput) {
    return prisma.posts.create({
        data
    })
}

export async function getPosts() {
    return prisma.posts.findMany({
        select: {
            title: true,
            id: true,
            createdAt: true,
            updatedAt: true,
            likes: true,
            dislikes: true,
            content: true,
        }
    })
}

export async function getPostById(id: number) {
    return prisma.posts.findFirst({ where: { id } })
}

