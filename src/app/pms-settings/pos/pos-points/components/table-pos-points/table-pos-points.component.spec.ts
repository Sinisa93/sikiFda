import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePosPointsComponent } from './table-pos-points.component';

describe('TablePosPointsComponent', () => {
  let component: TablePosPointsComponent;
  let fixture: ComponentFixture<TablePosPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePosPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePosPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
