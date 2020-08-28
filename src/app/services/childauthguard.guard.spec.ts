import { TestBed } from '@angular/core/testing';

import { ChildauthguardGuard } from './childauthguard.guard';

describe('ChildauthguardGuard', () => {
  let guard: ChildauthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildauthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
