import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDepenses } from './gestion-depenses';

describe('GestionDepenses', () => {
  let component: GestionDepenses;
  let fixture: ComponentFixture<GestionDepenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDepenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDepenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
