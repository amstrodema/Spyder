/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScammerComponent } from './scammer.component';

describe('ScammerComponent', () => {
  let component: ScammerComponent;
  let fixture: ComponentFixture<ScammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
