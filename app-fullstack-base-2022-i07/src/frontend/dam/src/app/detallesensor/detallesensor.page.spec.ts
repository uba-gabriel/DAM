import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesensorPage } from './detallesensor.page';

describe('DetallesensorPage', () => {
  let component: DetallesensorPage;
  let fixture: ComponentFixture<DetallesensorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
