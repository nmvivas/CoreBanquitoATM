import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitsOthervalueComponent } from './debits-othervalue.component';

describe('DebitsOthervalueComponent', () => {
  let component: DebitsOthervalueComponent;
  let fixture: ComponentFixture<DebitsOthervalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitsOthervalueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitsOthervalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
