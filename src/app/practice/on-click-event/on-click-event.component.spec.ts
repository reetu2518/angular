import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnClickEventComponent } from './on-click-event.component';

describe('OnClickEventComponent', () => {
  let component: OnClickEventComponent;
  let fixture: ComponentFixture<OnClickEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnClickEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnClickEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
