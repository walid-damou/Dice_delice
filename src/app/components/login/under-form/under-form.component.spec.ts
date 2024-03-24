import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderFormComponent } from './under-form.component';

describe('UnderFormComponent', () => {
  let component: UnderFormComponent;
  let fixture: ComponentFixture<UnderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
