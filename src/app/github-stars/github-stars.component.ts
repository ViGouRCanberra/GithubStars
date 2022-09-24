import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { RepoData } from '../structures/repoData';
import { Repo } from '../structures/repo';

@Component({
  selector: 'app-github-stars',
  templateUrl: './github-stars.component.html',
  styleUrls: ['./github-stars.component.css']
})
export class GithubStarsComponent implements OnInit {
  private currentPage: number = 1;
  repos: RepoData;

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.githubService.getGithubRepoInfo(this.currentPage).subscribe((data) => this.repos = data);
  }

  onScroll() {
    this.currentPage++;
    this.githubService.getGithubRepoInfo(this.currentPage).subscribe((data) => {
      data.items.forEach(element => {
        this.repos.items.push(element);
      });
    });
  }
}
