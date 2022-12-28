import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSliderComponent } from './comments-slider.component';

describe('CommentsSliderComponent', () => {
  let component: CommentsSliderComponent;
  let fixture: ComponentFixture<CommentsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
