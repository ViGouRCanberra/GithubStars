import { Owner } from '../structures/owner';

export interface Repo {
    id: number,
    name: string,
    owner: Owner,
    description: string,
    stargazers_count: number,
    open_issues_count: number,
    created_at: Date,
}