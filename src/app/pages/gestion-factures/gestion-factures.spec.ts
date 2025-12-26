import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFactures } from './gestion-factures';

describe('GestionFactures', () => {
  let component: GestionFactures;
  let fixture: ComponentFixture<GestionFactures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionFactures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFactures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
