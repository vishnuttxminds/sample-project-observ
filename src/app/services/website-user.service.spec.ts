import { TestBed } from '@angular/core/testing';

import { WebsiteUserService } from './website-user.service';

describe('WebsiteUserService', () => {
  let service: WebsiteUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
