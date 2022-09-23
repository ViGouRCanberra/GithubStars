import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubEndpoint = 'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc';

  constructor(
    private http: HttpClient
  ) { }

  getGithubRepoInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.githubEndpoint, {
      'responseType': 'json'
    });
  }
}
