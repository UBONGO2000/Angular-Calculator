import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivethrowComponent } from './fivethrow.component';

describe('FivethrowComponent', () => {
  let component: FivethrowComponent;
  let fixture: ComponentFixture<FivethrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivethrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FivethrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
