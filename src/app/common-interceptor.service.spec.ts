import { TestBed } from '@angular/core/testing';

import { CommonInterceptorService } from './common-interceptor.service';

describe('CommonInterceptorService', () => {
  let service: CommonInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
