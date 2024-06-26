import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSucessfulComponent } from './transaction-sucessful.component';

describe('TransactionSucessfulComponent', () => {
  let component: TransactionSucessfulComponent;
  let fixture: ComponentFixture<TransactionSucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionSucessfulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
