/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewWantedComponent } from './new-wanted.component';

describe('NewWantedComponent', () => {
  let component: NewWantedComponent;
  let fixture: ComponentFixture<NewWantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
