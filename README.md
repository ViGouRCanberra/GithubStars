# GithubStars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## External libraries added

`dateAgo Pipe from Github` 
- Added this snippet from Github to enable me to do the "30 days ago"

`Bootstrap v4`
- Added Bootstrap for its grid layout ability and helpere CSS
- Used the CDN for this assignment, but would rather prefer a downloaded copy for prod. You never know when a DDOS distrupts services.
- Used Bootstrap instead of Angular Material because it is what I'm familiar with, and could do the styling I wanted quickest. Also used v4 instead of v5 for the same reason. Didn't want to take a change on possible differences to what I'm used to.

`Angular Infinite Scroll` (npm i ngx-infinite-scroll@10.0.0)
- Added Angular Infinite scroll to detect scrolling to bottom to load more results
- It's 2 years old with a publish in the last 2 months. Seems to be kept up to date well
- Seems to be pretty widely used as well with loads of downloads a month