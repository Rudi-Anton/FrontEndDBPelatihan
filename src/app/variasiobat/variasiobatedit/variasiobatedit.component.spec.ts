import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariasiobateditComponent } from './variasiobatedit.component';

describe('VariasiobateditComponent', () => {
  let component: VariasiobateditComponent;
  let fixture: ComponentFixture<VariasiobateditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariasiobateditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariasiobateditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
