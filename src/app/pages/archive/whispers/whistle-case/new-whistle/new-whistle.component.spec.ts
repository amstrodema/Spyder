/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewWhistleComponent } from './new-whistle.component';

describe('NewWhistleComponent', () => {
  let component: NewWhistleComponent;
  let fixture: ComponentFixture<NewWhistleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWhistleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWhistleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
