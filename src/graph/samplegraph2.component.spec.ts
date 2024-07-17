import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samplegraph2Component } from './samplegraph2.component';

describe('Samplegraph2Component', () => {
  let component: Samplegraph2Component;
  let fixture: ComponentFixture<Samplegraph2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Samplegraph2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Samplegraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
