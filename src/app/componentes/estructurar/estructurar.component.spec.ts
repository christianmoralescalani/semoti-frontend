import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructurarComponent } from './estructurar.component';

describe('EstructurarComponent', () => {
  let component: EstructurarComponent;
  let fixture: ComponentFixture<EstructurarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructurarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructurarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
