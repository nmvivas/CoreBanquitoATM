import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitsCheckComponent } from './debits-check.component';

describe('DebitsCheckComponent', () => {
  let component: DebitsCheckComponent;
  let fixture: ComponentFixture<DebitsCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitsCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
