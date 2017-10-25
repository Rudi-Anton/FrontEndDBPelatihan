import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariasiobatdetailComponent } from './variasiobatdetail.component';

describe('VariasiobatdetailComponent', () => {
  let component: VariasiobatdetailComponent;
  let fixture: ComponentFixture<VariasiobatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariasiobatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariasiobatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
