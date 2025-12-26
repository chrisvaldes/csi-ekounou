import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationProduit } from './designation-produit';

describe('DesignationProduit', () => {
  let component: DesignationProduit;
  let fixture: ComponentFixture<DesignationProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignationProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
