import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCsie } from './footer-csie';

describe('FooterCsie', () => {
  let component: FooterCsie;
  let fixture: ComponentFixture<FooterCsie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCsie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCsie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
