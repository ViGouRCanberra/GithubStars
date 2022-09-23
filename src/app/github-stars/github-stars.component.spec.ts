import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubStarsComponent } from './github-stars.component';

describe('GithubStarsComponent', () => {
  let component: GithubStarsComponent;
  let fixture: ComponentFixture<GithubStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
