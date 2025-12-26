import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCsie } from './header-csie';

describe('HeaderCsie', () => {
  let component: HeaderCsie;
  let fixture: ComponentFixture<HeaderCsie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCsie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCsie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
