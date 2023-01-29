import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const commentInput = {
    content: z.string()
}
const commentGenerated = {
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
}

const createCommentSchema = z.object({
    ...commentInput
})

const commentResponseSchema = z.object({
    ...commentInput,
    ...commentGenerated
})

const commentsResponseSchema = z.array(commentResponseSchema)

export type createCommentInput = z.infer<typeof createCommentSchema>;

export const { schemas: commentSchemas, $ref } = buildJsonSchemas({
    createCommentSchema,
    commentResponseSchema,
    commentsResponseSchema
}, { $id: "commentSchema" })