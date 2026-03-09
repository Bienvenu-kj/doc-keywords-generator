import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsGeneratingResult } from './keywords-generating-result';

describe('KeywordsGeneratingResult', () => {
  let component: KeywordsGeneratingResult;
  let fixture: ComponentFixture<KeywordsGeneratingResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordsGeneratingResult],
    }).compileComponents();

    fixture = TestBed.createComponent(KeywordsGeneratingResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
