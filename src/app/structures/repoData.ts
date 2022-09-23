import { Repo } from './repo';

export interface RepoData {
    total_count: number,
    incomplete_results: boolean,
    items: Repo[],
}