import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCoachingComponent } from './demande-coaching.component';

describe('DemandeCoachingComponent', () => {
  let component: DemandeCoachingComponent;
  let fixture: ComponentFixture<DemandeCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeCoachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
