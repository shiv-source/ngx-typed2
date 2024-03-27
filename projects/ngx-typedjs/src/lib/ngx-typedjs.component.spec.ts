import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTypedjsComponent } from './ngx-typedjs.component';

describe('NgxTypedjsComponent', () => {
  let component: NgxTypedjsComponent;
  let fixture: ComponentFixture<NgxTypedjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTypedjsComponent]
    });
    fixture = TestBed.createComponent(NgxTypedjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
