import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitsPassComponent } from './debits-pass.component';

describe('DebitsPassComponent', () => {
  let component: DebitsPassComponent;
  let fixture: ComponentFixture<DebitsPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitsPassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitsPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
