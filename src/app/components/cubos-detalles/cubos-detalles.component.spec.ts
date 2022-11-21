import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubosDetallesComponent } from './cubos-detalles.component';

describe('CubosDetallesComponent', () => {
  let component: CubosDetallesComponent;
  let fixture: ComponentFixture<CubosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubosDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
