import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service';

describe('AuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthServiceService);
    expect(service).toBeTruthy();
  });
});
