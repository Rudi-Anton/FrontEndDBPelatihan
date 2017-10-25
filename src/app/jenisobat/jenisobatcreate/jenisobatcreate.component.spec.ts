import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisobatcreateComponent } from './jenisobatcreate.component';

describe('JenisobatcreateComponent', () => {
  let component: JenisobatcreateComponent;
  let fixture: ComponentFixture<JenisobatcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisobatcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisobatcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
