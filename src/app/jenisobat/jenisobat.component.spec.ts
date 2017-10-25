import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisobatComponent } from './jenisobat.component';

describe('JenisobatComponent', () => {
  let component: JenisobatComponent;
  let fixture: ComponentFixture<JenisobatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisobatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisobatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
