import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUtilComponent } from './edit-util.component';

describe('EditUtilComponent', () => {
  let component: EditUtilComponent;
  let fixture: ComponentFixture<EditUtilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUtilComponent]
    });
    fixture = TestBed.createComponent(EditUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
