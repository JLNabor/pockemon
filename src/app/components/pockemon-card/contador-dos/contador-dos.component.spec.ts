import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorDosComponent } from './contador-dos.component';

describe('ContadorDosComponent', () => {
  let component: ContadorDosComponent;
  let fixture: ComponentFixture<ContadorDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
