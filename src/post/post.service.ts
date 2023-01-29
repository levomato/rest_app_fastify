import prisma from "../utils/prisma";
import { CreatePostInput, UpdatePostInput } from "./post.schema";

export async function createPost(data: CreatePostInput) {
    return prisma.posts.create({
        data
    })
}

export async function getPosts() {
    const posts = prisma.posts.findMany({
        select: {
            title: true,
            id: true,
            createdAt: true,
            updatedAt: true,
            likes: true,
            dislikes: true,
            content: true,
            comments: true
        }
    })

    console.log(posts.then((posts) => {
        console.log(posts)
    }))

    return posts
}

export async function getPostById(id: number) {
    return prisma.posts.findFirst({ where: { id } })
}

export async function updatePostById(postid: number, data: UpdatePostInput) {
    const { title, content } = data;
    console.log(data)
    return prisma.posts.update({
        where: { id: postid },
        data: {
            title,
            content
        },
        include: {
            comments: true
        }
    })
}
