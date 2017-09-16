import { TestBed, inject } from '@angular/core/testing';

import { StudentSearchService } from './student-search.service';

describe('StudentSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentSearchService]
    });
  });

  it('should be created', inject([StudentSearchService], (service: StudentSearchService) => {
    expect(service).toBeTruthy();
  }));
});
