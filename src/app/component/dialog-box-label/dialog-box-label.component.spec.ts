import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxLabelComponent } from './dialog-box-label.component';

describe('DialogBoxLabelComponent', () => {
  let component: DialogBoxLabelComponent;
  let fixture: ComponentFixture<DialogBoxLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
