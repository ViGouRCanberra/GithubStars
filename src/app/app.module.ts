import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { GithubStarsComponent } from './github-stars/github-stars.component';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      { path: '', component: GithubStarsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    GithubStarsComponent,
    RepoCardComponent,
    DateAgoPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
