import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeAccountComponent } from './service-type-account.component';

describe('ServiceTypeAccountComponent', () => {
  let component: ServiceTypeAccountComponent;
  let fixture: ComponentFixture<ServiceTypeAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTypeAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTypeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
