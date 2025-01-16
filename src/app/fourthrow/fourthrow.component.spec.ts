import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthrowComponent } from './fourthrow.component';

describe('FourthrowComponent', () => {
  let component: FourthrowComponent;
  let fixture: ComponentFixture<FourthrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
