/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MygoinglistComponent } from './mygoinglist.component';

describe('MygoinglistComponent', () => {
  let component: MygoinglistComponent;
  let fixture: ComponentFixture<MygoinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygoinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygoinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
