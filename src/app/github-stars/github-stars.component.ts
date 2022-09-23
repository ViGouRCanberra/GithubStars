import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { RepoData } from '../structures/repoData';

@Component({
  selector: 'app-github-stars',
  templateUrl: './github-stars.component.html',
  styleUrls: ['./github-stars.component.css']
})
export class GithubStarsComponent implements OnInit {
  repos: RepoData;

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.githubService.getGithubRepoInfo().subscribe((data) => this.repos = data);
  }
}
