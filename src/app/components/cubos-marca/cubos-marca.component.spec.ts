import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubosMarcaComponent } from './cubos-marca.component';

describe('CubosMarcaComponent', () => {
  let component: CubosMarcaComponent;
  let fixture: ComponentFixture<CubosMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubosMarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubosMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
