import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { RoomAvailabilityPeriod } from '../../../../../interfaces/room-availability-period';
import { SelectionModel } from '@angular/cdk/collections';
import { RoomAvailabilityPeriodsService } from '../../../../services/room-availability-periods.service';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { style, state, trigger } from '@angular/animations';
import { Location } from '@angular/common';
//import { AddEditDialogAvailabilityPeriodsComponent } from '../add-edit-dialog-availability-periods/add-edit-dialog-availability-periods.component';
//import { FakeRoomAvailabilityPeriodsService } from '../../services/fake-room-availability-periods.service';
import { RoomAvailabilityPeriodsDataService } from '../../../../services/room-availability-periods-data.service';
import { FormAvailabilityPeriodsComponent } from '../form-availability-periods/form-availability-periods.component';

@Component({
  selector: 'app-table-availability-periods',
  templateUrl: './table-availability-periods.component.html',
  styleUrls: ['./table-availability-periods.component.css'],
  animations: [
    trigger('showList',[
      state('true', style({display:'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableAvailabilityPeriodsComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  constructor(
    private roomAvailabilityPeriodsService : RoomAvailabilityPeriodsService,
    private location:Location,
    private roomAvailabilityPeriodsDialog:MatDialog,
    private roomAvailabilityPeriodsDataService:RoomAvailabilityPeriodsDataService
  ) { }

  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<RoomAvailabilityPeriod>();
  private selectedRows = new SelectionModel<any>(true,[]);
  private isVisibleColumnList : boolean=false;

  private columns= [
    {
      propertyName : "id",
      title : "#",
      display: true
    },
    {
      propertyName : "select",
      title : "",
      display: true
    },
    {
      propertyName : "title",
      title : "Title",
      display: true
    },
    {
      propertyName : "start",
      title : "Start",
      display: true
    },
    {
      propertyName : "end",
      title : "End",
      display: true
    },
    {
      propertyName : "repeat",
      title : "Repeat",
      display: true
    },
    {
      propertyName : "status",
      title : "Status",
      display: true
    }
  ];

  private displayedColumns : string[];
  private fixedColumns = ['select'];
  private pageSizeOptions=[3,10,20,30,50,70,100,200];



  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();

    this.subscription.add(this.roomAvailabilityPeriodsService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data,
        this.roomAvailabilityPeriodsDataService.roomAvailabilityPeriodsData.next(data)
      }
    ));
    this.subscription.add(this.roomAvailabilityPeriodsDataService.roomAvailabilityPeriodsData$.subscribe(
      (data:any[])=>{
        this.dataSource.data=data;
      }
    ));
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  getDisplayedColumns(){
    return this.columns.filter(item => item.display).map(item => {return item.propertyName});
  }

  isFixedColumn(propertyName){
    return ArrayFunctions.inArray(propertyName, this.fixedColumns);
  }

  onSearch(value : string){
    let filterValue=value.trim().toLowerCase();
    this.dataSource.filter=filterValue;
  }

  openColumnsList(){
    this.isVisibleColumnList= !this.isVisibleColumnList;
  }

  getEditableColumns(){
    return this.columns.filter(item => !this.isFixedColumn(item.propertyName));
  }

  toggleColumn(propertyName, isChecked){
    this.columns.map(
      item =>{
        if(item.propertyName==propertyName)
        item.display=isChecked
      }
    );
    this.displayedColumns=this.getDisplayedColumns();
  }

  onGroupDelete(){
    let selectedItems=this.selectedRows.selected;
    this.dataSource.data=this.dataSource.data.filter(
      item => !ArrayFunctions.inArray(item, selectedItems));
  }

  goBack(){
    this.location.back();
  }
  openAddEditDialog(id?){
   
     let roomAvailabilityPeriodsDialogRef=this.roomAvailabilityPeriodsDialog.open(FormAvailabilityPeriodsComponent,{
        width:'50%',
        height:'80%',
        data:{
          id:id
        }
      });
  

  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
