import z from 'zod';
import { buildJsonSchemas } from 'fastify-zod'

const postInput = {
    title: z.string(),
    content: z.string()
}

const postGenerated = {
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    likes: z.number(),
    dislikes: z.number(),
    comments: z.array(z.object({
        content: z.string()
    }))
}

const createPostSchema = z.object({
    ...postInput,
})

const updatePostSchema = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
})
const postResponseSchema = z.object({
    ...postInput,
    ...postGenerated
})

const postsResponseSchema = z.array(postResponseSchema)

export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>

export const { schemas: postSchemas, $ref } = buildJsonSchemas({
    createPostSchema,
    updatePostSchema,
    postResponseSchema,
    postsResponseSchema
}, { $id: "postSchema" })