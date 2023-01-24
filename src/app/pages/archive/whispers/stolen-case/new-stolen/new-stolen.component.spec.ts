/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewStolenComponent } from './new-stolen.component';

describe('NewStolenComponent', () => {
  let component: NewStolenComponent;
  let fixture: ComponentFixture<NewStolenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStolenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStolenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
