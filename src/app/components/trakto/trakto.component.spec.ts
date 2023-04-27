import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraktoComponent } from './trakto.component';

describe('TraktoComponent', () => {
  let component: TraktoComponent;
  let fixture: ComponentFixture<TraktoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraktoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraktoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
