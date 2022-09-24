import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepoData } from '../structures/repoData';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private githubEndpoint = 'https://api.github.com/search/repositories?q=created:>';
  private githubEndpointParams = '&sort=stars&order=desc';
  private githubPaginationParam = '&page=';

  constructor(
    private http: HttpClient
  ) {}

  getGithubRepoInfo(page: number = 1): Observable<RepoData> {
    return this.http.get<RepoData>(this.buildGithubEndpoint(page), {
      'responseType': 'json'
    });
  }

  buildGithubEndpoint(page: number): string {
    let optionalPaginationParam = '';

    if (page > 1) {
      optionalPaginationParam = `${this.githubPaginationParam}${page}`;
    }

    return `${this.githubEndpoint}${this.getDateThirtyDaysAgo()}${this.githubEndpointParams}${optionalPaginationParam}`;
  }

  getDateThirtyDaysAgo(): string {
    let thirtyDaysAgo = new Date();

    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return formatDate(thirtyDaysAgo, 'y-MM-d', 'en');
  }
}
