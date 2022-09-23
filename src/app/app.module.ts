import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GithubStarsComponent } from './github-stars/github-stars.component';
import { RepoCardComponent } from './repo-card/repo-card.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GithubStarsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    GithubStarsComponent,
    RepoCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
