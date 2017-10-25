import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisobatdetailComponent } from './jenisobatdetail.component';

describe('JenisobatdetailComponent', () => {
  let component: JenisobatdetailComponent;
  let fixture: ComponentFixture<JenisobatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisobatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisobatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
