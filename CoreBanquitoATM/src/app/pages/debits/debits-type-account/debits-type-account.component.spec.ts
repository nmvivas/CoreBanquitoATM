import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitsTypeAccountComponent } from './debits-type-account.component';

describe('DebitsTypeAccountComponent', () => {
  let component: DebitsTypeAccountComponent;
  let fixture: ComponentFixture<DebitsTypeAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitsTypeAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitsTypeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
