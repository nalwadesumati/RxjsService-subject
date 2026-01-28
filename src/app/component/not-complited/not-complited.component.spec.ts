import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotComplitedComponent } from './not-complited.component';

describe('NotComplitedComponent', () => {
  let component: NotComplitedComponent;
  let fixture: ComponentFixture<NotComplitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotComplitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotComplitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
