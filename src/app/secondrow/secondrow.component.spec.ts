import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondrowComponent } from './secondrow.component';

describe('SecondrowComponent', () => {
  let component: SecondrowComponent;
  let fixture: ComponentFixture<SecondrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
