import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkcollectionComponent } from './milkcollection.component';

describe('MilkcollectionComponent', () => {
  let component: MilkcollectionComponent;
  let fixture: ComponentFixture<MilkcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkcollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
