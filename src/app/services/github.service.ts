import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepoData } from '../structures/repoData';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // TODO Pull today's date and use it instead of 2017-10-22
  //private githubEndpoint = 'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc';
  private githubEndpoint = '/assets/github-example.json';

  constructor(
    private http: HttpClient
  ) { }

  getGithubRepoInfo(): Observable<RepoData> {
    //TODO Add ability to specify page

    return this.http.get<RepoData>(this.githubEndpoint, {
      'responseType': 'json'
    });
  }
}
