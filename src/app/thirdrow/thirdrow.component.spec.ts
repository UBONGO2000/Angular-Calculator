import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdrowComponent } from './thirdrow.component';

describe('ThirdrowComponent', () => {
  let component: ThirdrowComponent;
  let fixture: ComponentFixture<ThirdrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
