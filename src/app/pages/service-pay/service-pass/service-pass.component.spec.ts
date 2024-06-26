import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePassComponent } from './service-pass.component';

describe('ServicePassComponent', () => {
  let component: ServicePassComponent;
  let fixture: ComponentFixture<ServicePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
