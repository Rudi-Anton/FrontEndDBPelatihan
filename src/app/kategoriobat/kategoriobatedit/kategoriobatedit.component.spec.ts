import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriobateditComponent } from './kategoriobatedit.component';

describe('KategoriobateditComponent', () => {
  let component: KategoriobateditComponent;
  let fixture: ComponentFixture<KategoriobateditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriobateditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriobateditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
