import { TestBed } from '@angular/core/testing';

import { ApiHelper } from './api.helper.service';

describe('ApiHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiHelper = TestBed.get(ApiHelper);
    expect(service).toBeTruthy();
  });
});
