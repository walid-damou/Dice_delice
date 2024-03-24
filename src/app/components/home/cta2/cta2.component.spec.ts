import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cta2Component } from './cta2.component';

describe('Cta2Component', () => {
  let component: Cta2Component;
  let fixture: ComponentFixture<Cta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cta2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
