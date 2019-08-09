import { TestBed } from '@angular/core/testing';

import { RegistrarseService } from './registrarse.service';

describe('RegistrarseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarseService = TestBed.get(RegistrarseService);
    expect(service).toBeTruthy();
  });
});
