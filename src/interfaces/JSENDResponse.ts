import { Static } from "@sinclair/typebox"

export type JSENDSuccess<T> = {
    status: 'success';
    data: T;
}

export type JSENDResponse<T> = JSENDSuccess<T>