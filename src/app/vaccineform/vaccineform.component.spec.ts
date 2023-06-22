import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineformComponent } from './vaccineform.component';

describe('VaccineformComponent', () => {
  let component: VaccineformComponent;
  let fixture: ComponentFixture<VaccineformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccineformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
