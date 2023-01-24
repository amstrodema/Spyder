/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Spinner2Component } from './spinner2.component';

describe('Spinner2Component', () => {
  let component: Spinner2Component;
  let fixture: ComponentFixture<Spinner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spinner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spinner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
