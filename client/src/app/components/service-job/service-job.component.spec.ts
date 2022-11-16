import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceJobComponent } from './service-job.component';

describe('ServiceJobComponent', () => {
  let component: ServiceJobComponent;
  let fixture: ComponentFixture<ServiceJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
