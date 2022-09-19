import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewDoctorsComponent } from './register-new-doctors.component';

describe('RegisterNewDoctorsComponent', () => {
  let component: RegisterNewDoctorsComponent;
  let fixture: ComponentFixture<RegisterNewDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNewDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNewDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
