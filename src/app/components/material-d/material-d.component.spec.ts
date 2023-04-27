import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDComponent } from './material-d.component';

describe('MaterialDComponent', () => {
  let component: MaterialDComponent;
  let fixture: ComponentFixture<MaterialDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
