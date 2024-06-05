import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutactusComponent } from './coutactus.component';

describe('CoutactusComponent', () => {
  let component: CoutactusComponent;
  let fixture: ComponentFixture<CoutactusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoutactusComponent]
    });
    fixture = TestBed.createComponent(CoutactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
