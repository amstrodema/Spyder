/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideAdvComponent } from './sideAdv.component';

describe('SideAdvComponent', () => {
  let component: SideAdvComponent;
  let fixture: ComponentFixture<SideAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
