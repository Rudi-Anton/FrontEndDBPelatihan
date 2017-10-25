import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinsicreateComponent } from './provinsicreate.component';

describe('ProvinsicreateComponent', () => {
  let component: ProvinsicreateComponent;
  let fixture: ComponentFixture<ProvinsicreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinsicreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinsicreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
