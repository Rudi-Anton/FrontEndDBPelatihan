import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisobateditComponent } from './jenisobatedit.component';

describe('JenisobateditComponent', () => {
  let component: JenisobateditComponent;
  let fixture: ComponentFixture<JenisobateditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisobateditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisobateditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
