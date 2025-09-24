import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodbookingComponent } from './foodbooking.component';

describe('FoodbookingComponent', () => {
  let component: FoodbookingComponent;
  let fixture: ComponentFixture<FoodbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodbookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
