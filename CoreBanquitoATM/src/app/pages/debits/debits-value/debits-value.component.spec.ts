import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitsValueComponent } from './debits-value.component';

describe('DebitsValueComponent', () => {
  let component: DebitsValueComponent;
  let fixture: ComponentFixture<DebitsValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitsValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitsValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
