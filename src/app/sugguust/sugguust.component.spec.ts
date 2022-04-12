import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugguustComponent } from './sugguust.component';

describe('SugguustComponent', () => {
  let component: SugguustComponent;
  let fixture: ComponentFixture<SugguustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugguustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugguustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
