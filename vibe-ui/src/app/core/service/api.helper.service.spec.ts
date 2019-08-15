import { TestBed } from '@angular/core/testing';

import { ApiHelper } from './services';

describe('ApiHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiHelper = TestBed.get(ApiHelper);
    expect(service).toBeTruthy();
  });
});
