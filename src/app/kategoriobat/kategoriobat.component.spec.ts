import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriobatComponent } from './kategoriobat.component';

describe('KategoriobatComponent', () => {
  let component: KategoriobatComponent;
  let fixture: ComponentFixture<KategoriobatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriobatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriobatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
