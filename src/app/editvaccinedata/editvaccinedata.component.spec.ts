import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvaccinedataComponent } from './editvaccinedata.component';

describe('EditvaccinedataComponent', () => {
  let component: EditvaccinedataComponent;
  let fixture: ComponentFixture<EditvaccinedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvaccinedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditvaccinedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
