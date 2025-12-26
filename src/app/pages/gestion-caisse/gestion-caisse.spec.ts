import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCaisse } from './gestion-caisse';

describe('GestionCaisse', () => {
  let component: GestionCaisse;
  let fixture: ComponentFixture<GestionCaisse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCaisse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCaisse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
