import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZeldaPage } from './zelda.page';

describe('ZeldaPage', () => {
  let component: ZeldaPage;
  let fixture: ComponentFixture<ZeldaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeldaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
