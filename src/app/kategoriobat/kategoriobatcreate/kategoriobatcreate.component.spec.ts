import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriobatcreateComponent } from './kategoriobatcreate.component';

describe('KategoriobatcreateComponent', () => {
  let component: KategoriobatcreateComponent;
  let fixture: ComponentFixture<KategoriobatcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriobatcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriobatcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
