import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../structures/repo';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  @Input() repo: Repo;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
