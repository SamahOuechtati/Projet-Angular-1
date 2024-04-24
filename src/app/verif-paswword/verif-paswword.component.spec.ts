import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifPaswwordComponent } from './verif-paswword.component';

describe('VerifPaswwordComponent', () => {
  let component: VerifPaswwordComponent;
  let fixture: ComponentFixture<VerifPaswwordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifPaswwordComponent]
    });
    fixture = TestBed.createComponent(VerifPaswwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
