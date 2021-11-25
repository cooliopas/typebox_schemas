import { TSchema } from "@sinclair/typebox";
export declare const JSENDSuccessSchema: <T extends TSchema>(type: T) => import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TLiteral<"success">;
    data: T;
}>;
