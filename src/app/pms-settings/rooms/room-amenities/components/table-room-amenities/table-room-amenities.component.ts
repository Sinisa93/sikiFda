import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { RoomAmenity } from '../../../../../interfaces/room-amenity';
import { SelectionModel } from '@angular/cdk/collections';
import { RoomAmenitiesService } from '../../../../services/room-amenities.service';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { Location } from '@angular/common';
import { trigger, state, style } from '@angular/animations';
//import { AddEditDialogRoomAmenitiesComponent } from '../add-edit-dialog-room-amenities/add-edit-dialog-room-amenities.component';
//import { FakeRoomAmenitiesService } from '../../services/fake-room-amenities.service';
import { RoomAmenitiesDataService } from '../../../../services/room-amenities-data.service';
import { FormRoomAmenitiesComponent } from '../form-room-amenities/form-room-amenities.component';

@Component({
  selector: 'app-table-room-amenities',
  templateUrl: './table-room-amenities.component.html',
  styleUrls: ['./table-room-amenities.component.css'],
  animations: [
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableRoomAmenitiesComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor(private roomAmenitiesService:RoomAmenitiesService, 
              private location:Location,
              private roomAmenitiesDialog:MatDialog,
              private roomAmenitiesDataService:RoomAmenitiesDataService) { }

  private subscription=new Subscription();
  private dataSource=new MatTableDataSource<RoomAmenity>();
  
  private selectedRows=new SelectionModel<any>(true,[]);
  private isVisibleColumnList : boolean=false;
  private roomAmenities;
  private columns=[
    {
      propertyName: "id",
      title: "#",
      display:true
    },
    {
      propertyName: "select",
      title: "",
      display:true
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
      propertyName: "description",
      title: "Description",
      display: false,
    }
  ];

  private displayedColumns : string[];
  private fixedColumns=['select'];
  private pageSizeOptions = [5,10,20,30,50,70,100,200];

 

  ngOnInit() {
    this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.roomAmenitiesService.getAll().subscribe(
      (data:any[]) => {
        this.dataSource.data=data,
        this.roomAmenitiesDataService.roomAmenitiesData.next(data)
      }
    ));
    this.subscription.add(this.roomAmenitiesDataService.roomAmenitiesData$.subscribe(
      data=>{
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

  onSearch(value:string){
    let filterValue = value.trim().toLocaleLowerCase();
    this.dataSource.filter=filterValue;
  }

  openColumnList(){
    this.isVisibleColumnList=!this.isVisibleColumnList;
  }

  getEditableColumns(){
    return this.columns.filter(item => !this.isFixedColumn(item.propertyName));
  }

  toggleColumn(propertyName, isChecked){
    this.columns.map(
      item=>{
        if(item.propertyName == propertyName)
        item.display=isChecked;
      }
    );
    this.displayedColumns=this.getDisplayedColumns();
  }

  onGroupDelete(){
    let selectedItems= this.selectedRows.selected;
    this.dataSource.data=this.dataSource.data.filter(item=> !ArrayFunctions.inArray(item,selectedItems));
  }

  openAddEditDialog(id?){
    
 
      let roomAmenitiesDialogRef=this.roomAmenitiesDialog.open(FormRoomAmenitiesComponent,{
        width:'50%',
        height:'60%',
        data:{
          id:id
        }
    });
}
 


  goBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
