import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIamComponent } from './who-iam.component';

describe('WhoIamComponent', () => {
  let component: WhoIamComponent;
  let fixture: ComponentFixture<WhoIamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoIamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoIamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
