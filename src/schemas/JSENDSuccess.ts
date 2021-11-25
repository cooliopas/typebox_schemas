import { TSchema, Type } from "@sinclair/typebox";

export const JSENDSuccessSchema = <T extends TSchema>(type: T) => Type.Object({
    status: Type.Literal('success'),
    data: type,
})