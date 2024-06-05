import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratainformComponent } from './registratainform.component';

describe('RegistratainformComponent', () => {
  let component: RegistratainformComponent;
  let fixture: ComponentFixture<RegistratainformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistratainformComponent]
    });
    fixture = TestBed.createComponent(RegistratainformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
