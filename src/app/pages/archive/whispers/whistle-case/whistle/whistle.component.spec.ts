/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhistleComponent } from './whistle.component';

describe('WhistleComponent', () => {
  let component: WhistleComponent;
  let fixture: ComponentFixture<WhistleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhistleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhistleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
