import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraficodetallesPage } from './graficodetalles.page';

describe('GraficodetallesPage', () => {
  let component: GraficodetallesPage;
  let fixture: ComponentFixture<GraficodetallesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GraficodetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
