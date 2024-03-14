import { TestBed } from '@angular/core/testing';
import { SuperBowlService } from './super-bowl.service';

describe('SuperBowlService', () => {
  let service: SuperBowlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperBowlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
