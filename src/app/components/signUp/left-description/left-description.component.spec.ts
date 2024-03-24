import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftDescriptionComponent } from './left-description.component';

describe('LeftDescriptionComponent', () => {
  let component: LeftDescriptionComponent;
  let fixture: ComponentFixture<LeftDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
