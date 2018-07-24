import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { RoomClassesService } from '../../../../services/room-classes.service';
import { RoomClass } from '../../../../../interfaces/room-class';
import { Subscription } from 'rxjs';
import { trigger, state, style } from '@angular/animations';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { Location } from '@angular/common';

@Component({
  selector: 'app-table-room-classes',
  templateUrl: './table-room-classes.component.html',
  styleUrls: ['./table-room-classes.component.css'],
  animations: [
    trigger('showList', [
      state('true', style({ display: 'block'})),
      state('false', style({ display: 'none'}))
    ])
  ]
})
export class TableRoomClassesComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  private subscription : Subscription;
  private dataSource = new MatTableDataSource<RoomClass>();
  private selectedRows = new SelectionModel<any>(true, []);
  private isVisibleColumnList = false;

  private columns = [
    {
      propertyName: "id",
      title: "#",
      display: true,
    },
    {
      propertyName: "select",
      title: "",
      display: true,
    },
    {
      propertyName: "title",
      title: "Title",
      display: true,
    },
    {
      propertyName: "status",
      title: "Status",
      display: true,
    },
    {
      propertyName: "actions",
      title: "Actions",
      display: true,
    }
  ];

  private displayedColumns : string[];
  private fixedColumns = ['select', 'actions']; // not sortable, cannot be hidden..
  private pageSizeOptions = [10,20,30,50,70,100,200];

  constructor(private roomClassesService : RoomClassesService, private location : Location) { }

  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();

    this.subscription = this.roomClassesService.getAll().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getDisplayedColumns(){
    return this.columns.filter(item => item.display).map(item => { return item.propertyName });
  }

  getEditableColumns(){
    return this.columns.filter(item => !this.isFixedColumn(item.propertyName));
  }

  openColumnsList(){
    this.isVisibleColumnList = ! this.isVisibleColumnList;
  }

  isFixedColumn(propertyName){
    return ArrayFunctions.inArray(propertyName, this.fixedColumns);
  }
  
  toogleColumn(propertyName, isChecked){
    this.columns.map(item => {
      if(item.propertyName == propertyName)
        item.display = isChecked;
    });
    this.displayedColumns = this.getDisplayedColumns();
  }

  onGroupDelete(){
    let selectedItems = this.selectedRows.selected; // all selected rows
    // simulation of delete
    this.dataSource.data = this.dataSource.data.filter(item => !ArrayFunctions.inArray(item, selectedItems)); // searching array(json) and getting 'room classes" which are not in array of selected 'room classes' to delte
    
  }

  onSearch(value : string){
    let filterValue = value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  goBack(){
    this.location.back();
  }

  
}
