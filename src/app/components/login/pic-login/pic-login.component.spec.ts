import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicLoginComponent } from './pic-login.component';

describe('PicLoginComponent', () => {
  let component: PicLoginComponent;
  let fixture: ComponentFixture<PicLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PicLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
