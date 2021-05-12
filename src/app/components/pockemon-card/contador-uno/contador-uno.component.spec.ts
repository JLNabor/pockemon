import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorUnoComponent } from './contador-uno.component';

describe('ContadorUnoComponent', () => {
  let component: ContadorUnoComponent;
  let fixture: ComponentFixture<ContadorUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
