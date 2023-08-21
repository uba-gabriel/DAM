import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogsriegoPage } from './logsriego.page';

describe('LogsriegoPage', () => {
  let component: LogsriegoPage;
  let fixture: ComponentFixture<LogsriegoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogsriegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
