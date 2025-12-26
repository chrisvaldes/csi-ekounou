import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMainOeuvre } from './service-main-oeuvre';

describe('ServiceMainOeuvre', () => {
  let component: ServiceMainOeuvre;
  let fixture: ComponentFixture<ServiceMainOeuvre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceMainOeuvre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceMainOeuvre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
