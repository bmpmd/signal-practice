import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedComponentComponent } from './computed-component.component';

describe('ComputedComponentComponent', () => {
  let component: ComputedComponentComponent;
  let fixture: ComponentFixture<ComputedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
