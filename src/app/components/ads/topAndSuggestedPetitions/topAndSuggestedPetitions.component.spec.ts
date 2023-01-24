/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopAndSuggestedPetitionsComponent } from './topAndSuggestedPetitions.component';

describe('TopAndSuggestedPetitionsComponent', () => {
  let component: TopAndSuggestedPetitionsComponent;
  let fixture: ComponentFixture<TopAndSuggestedPetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAndSuggestedPetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAndSuggestedPetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
