import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonEditComponent } from './pockemon-edit.component';

describe('PockemonEditComponent', () => {
  let component: PockemonEditComponent;
  let fixture: ComponentFixture<PockemonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PockemonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
