import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GainEquiboosterComponent } from './gain-equibooster.component';

describe('GainEquiboosterComponent', () => {
  let component: GainEquiboosterComponent;
  let fixture: ComponentFixture<GainEquiboosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GainEquiboosterComponent]
    });
    fixture = TestBed.createComponent(GainEquiboosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
