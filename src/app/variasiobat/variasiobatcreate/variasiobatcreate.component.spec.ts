import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariasiobatcreateComponent } from './variasiobatcreate.component';

describe('VariasiobatcreateComponent', () => {
  let component: VariasiobatcreateComponent;
  let fixture: ComponentFixture<VariasiobatcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariasiobatcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariasiobatcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
