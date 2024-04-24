import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtilsateurComponent } from './list-utilsateur.component';

describe('ListUtilsateurComponent', () => {
  let component: ListUtilsateurComponent;
  let fixture: ComponentFixture<ListUtilsateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUtilsateurComponent]
    });
    fixture = TestBed.createComponent(ListUtilsateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
