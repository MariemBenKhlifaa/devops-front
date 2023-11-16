import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartenaireComponent } from './create-partenaire.component';

describe('CreatePartenaireComponent', () => {
  let component: CreatePartenaireComponent;
  let fixture: ComponentFixture<CreatePartenaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePartenaireComponent]
    });
    fixture = TestBed.createComponent(CreatePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
