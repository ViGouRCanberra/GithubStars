import { Url } from "url";

export interface Owner {
    id: number,
    login: string,
    avatar_url: Url,
}