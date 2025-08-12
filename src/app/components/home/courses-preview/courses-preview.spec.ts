import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPreview } from './courses-preview';

describe('CoursesPreview', () => {
  let component: CoursesPreview;
  let fixture: ComponentFixture<CoursesPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
