import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentes } from './gestion-ventes';

describe('GestionVentes', () => {
  let component: GestionVentes;
  let fixture: ComponentFixture<GestionVentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionVentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionVentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
