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

  constructor(
    private http: HttpClient
  ) {}

  getGithubRepoInfo(): Observable<RepoData> {
    //TODO Add ability to specify page

    return this.http.get<RepoData>(this.buildGithubEndpoint(), {
      'responseType': 'json'
    });
  }

  buildGithubEndpoint(): string {
    return `${this.githubEndpoint}${this.getDateThirtyDaysAgo()}${this.githubEndpointParams}`;
  }

  getDateThirtyDaysAgo(): string {
    let thirtyDaysAgo = new Date();

    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return formatDate(thirtyDaysAgo, 'y-MM-d', 'en');
  }
}
