import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProgress } from './course-progress';

describe('CourseProgress', () => {
  let component: CourseProgress;
  let fixture: ComponentFixture<CourseProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
