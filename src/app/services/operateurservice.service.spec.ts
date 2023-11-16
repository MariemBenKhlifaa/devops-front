import { TestBed } from '@angular/core/testing';

import { OperateurserviceService } from './operateurservice.service';

describe('OperateurserviceService', () => {
  let service: OperateurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperateurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
