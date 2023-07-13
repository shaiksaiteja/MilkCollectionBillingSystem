import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkrecordsComponent } from './milkrecords.component';

describe('MilkrecordsComponent', () => {
  let component: MilkrecordsComponent;
  let fixture: ComponentFixture<MilkrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkrecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
