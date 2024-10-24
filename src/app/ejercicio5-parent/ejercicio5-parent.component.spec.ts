import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio5ParentComponent } from './ejercicio5-parent.component';

describe('Ejercicio5ParentComponent', () => {
  let component: Ejercicio5ParentComponent;
  let fixture: ComponentFixture<Ejercicio5ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio5ParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio5ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
