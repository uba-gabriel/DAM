import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValvriegoPage } from './valvriego.page';

describe('ValvriegoPage', () => {
  let component: ValvriegoPage;
  let fixture: ComponentFixture<ValvriegoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValvriegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
