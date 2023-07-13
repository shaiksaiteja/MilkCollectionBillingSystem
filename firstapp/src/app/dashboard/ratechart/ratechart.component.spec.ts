import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatechartComponent } from './ratechart.component';

describe('RatechartComponent', () => {
  let component: RatechartComponent;
  let fixture: ComponentFixture<RatechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
