import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedVideosComponent } from './feed-videos.component';

describe('FeedVideosComponent', () => {
  let component: FeedVideosComponent;
  let fixture: ComponentFixture<FeedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
