import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCsie } from './aside-csie';

describe('AsideCsie', () => {
  let component: AsideCsie;
  let fixture: ComponentFixture<AsideCsie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideCsie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideCsie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
