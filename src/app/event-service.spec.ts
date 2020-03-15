import { TestBed } from '@angular/core/testing';

import { EventServiceService } from './event-service';

describe('EventServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventService = TestBed.get(EventServiceService);
    expect(service).toBeTruthy();
  });
});
