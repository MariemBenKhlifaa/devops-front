import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResponsableComponent } from './show-responsable.component';

describe('ShowResponsableComponent', () => {
  let component: ShowResponsableComponent;
  let fixture: ComponentFixture<ShowResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowResponsableComponent]
    });
    fixture = TestBed.createComponent(ShowResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
