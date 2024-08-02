import { TestBed } from '@angular/core/testing';

import { BackLinkServiceService } from './back-link-service.service';

describe('BackLinkServiceService', () => {
  let service: BackLinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackLinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
