import { TestBed } from '@angular/core/testing';

import { EnrolledCourses } from './enrolled-courses';

describe('EnrolledCourses', () => {
  let service: EnrolledCourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolledCourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
