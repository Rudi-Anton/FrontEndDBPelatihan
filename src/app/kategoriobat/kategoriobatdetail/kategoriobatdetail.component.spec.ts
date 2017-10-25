import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriobatdetailComponent } from './kategoriobatdetail.component';

describe('KategoriobatdetailComponent', () => {
  let component: KategoriobatdetailComponent;
  let fixture: ComponentFixture<KategoriobatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriobatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriobatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
