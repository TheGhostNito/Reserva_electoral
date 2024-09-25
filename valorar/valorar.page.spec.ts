import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValorarPage } from './valorar.page';

describe('ValorarPage', () => {
  let component: ValorarPage;
  let fixture: ComponentFixture<ValorarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
