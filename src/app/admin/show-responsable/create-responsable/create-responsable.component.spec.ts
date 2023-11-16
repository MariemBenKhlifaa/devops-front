import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResponsableComponent } from './create-responsable.component';
import { EventEmitter } from '@angular/core';

describe('CreateResponsableComponent', () => {
  let component: CreateResponsableComponent;
  let fixture: ComponentFixture<CreateResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateResponsableComponent]
    });
    fixture = TestBed.createComponent(CreateResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
