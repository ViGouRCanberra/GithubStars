import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GithubStarsComponent } from './github-stars/github-stars.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
