/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HallModelComponent } from './hall-model.component';

describe('HallModelComponent', () => {
  let component: HallModelComponent;
  let fixture: ComponentFixture<HallModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
