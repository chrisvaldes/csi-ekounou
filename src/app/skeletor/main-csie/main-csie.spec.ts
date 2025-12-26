import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCsie } from './main-csie';

describe('MainCsie', () => {
  let component: MainCsie;
  let fixture: ComponentFixture<MainCsie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCsie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCsie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
