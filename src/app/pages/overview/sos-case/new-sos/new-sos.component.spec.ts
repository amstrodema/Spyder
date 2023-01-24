/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewSosComponent } from './new-sos.component';

describe('NewSosComponent', () => {
  let component: NewSosComponent;
  let fixture: ComponentFixture<NewSosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
