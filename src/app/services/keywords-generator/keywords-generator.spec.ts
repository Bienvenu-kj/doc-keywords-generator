import { TestBed } from '@angular/core/testing';

import { KeywordsGenerator } from './keywords-generator';

describe('KeywordsGenerator', () => {
  let service: KeywordsGenerator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeywordsGenerator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
