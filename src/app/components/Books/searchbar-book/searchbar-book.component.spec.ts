import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarBookComponent } from './searchbar-book.component';

describe('SearchbarBookComponent', () => {
  let component: SearchbarBookComponent;
  let fixture: ComponentFixture<SearchbarBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchbarBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchbarBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
