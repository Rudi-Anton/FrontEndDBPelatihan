import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariasiobatComponent } from './variasiobat.component';

describe('VariasiobatComponent', () => {
  let component: VariasiobatComponent;
  let fixture: ComponentFixture<VariasiobatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariasiobatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariasiobatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
