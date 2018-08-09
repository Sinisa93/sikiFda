import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { OrderRoomsService } from '../../../../services/order-rooms.service';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '../../../../../../../node_modules/@angular/material';
import { OrderRoom } from '../../../../../interfaces/order-room';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { FormGroup, FormBuilder, FormArray } from '../../../../../../../node_modules/@angular/forms';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import {Location} from '@angular/common';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { ValueTransformer } from '../../../../../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-table-order-rooms',
  templateUrl: './table-order-rooms.component.html',
  styleUrls: ['./table-order-rooms.component.css'],
  animations: [
    trigger('showList',[
      state('true', style({display:'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableOrderRoomsComponent implements OnInit, OnDestroy {

  //view child
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(
    private orderRoomsService:OrderRoomsService,
    private location:Location,
    private formBuilder: FormBuilder
  ) { }

  private subscription=new Subscription();
  private dataSource=new MatTableDataSource<OrderRoom>();
  private selectedRows=new SelectionModel<any>(true, []);
  private isVisibleColumnList :boolean=false;

  private columns= [
    {
      propertyName : "id",
      title : "#",
      display: true
    },
    {
      propertyName : "room",
      title : "Room",
      display: true
    },
    {
      propertyName : "room-type",
      title : "Room type",
      display: true
    },
    {
      propertyName : "order",
      title : "Order",
      display: true
    }    
  ];

  private channels = [
    {
      "id":1,
      "name":"IBE"
    },
    {
      "id":2,
      "name":"FRONTDESK"
    },
    {
      "id":3,
      "name":"Siteminder"
    },
    {
      "id":4,
      "name":"BDC"
    },
    {
      "id":5,
      "name":"Expedia"
    }
  ];

  private displayedColumns : string[];
  private fixedColumns = ['select'];
  private pageSizeOptions=[3,10,20,30,50,70,100,200];

  formOrderRooms : FormGroup = this.formBuilder.group({
    orders: this.formBuilder.array([]),
  });

  private loadedValues;
  private isSame:boolean;
  private isSaved:boolean=false;

  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();
    this.fillTable('FRONTDESK');
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  getDisplayedColumns(){
    return this.columns.filter(item => item.display).map(item => item.propertyName);
  }

  isFixedColumn(propertyName){
    return ArrayFunctions.inArray(propertyName, this.fixedColumns);
  }

  onSearch(value:string){
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openColumnsList(){
    this.isVisibleColumnList=!this.isVisibleColumnList;
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

  onChannelSearch(isValueChanged, channelName:string){
    if(isValueChanged){
      this.fillTable(channelName);
    }
  }

  fillTable(filterBy?){
    this.subscription.add(this.orderRoomsService.getAll().subscribe(
      data =>{
        let filteredData = data.filter(item => item['channel'].name == filterBy);

        for(var i=0; i<= (this.formOrderRooms.get('orders') as FormArray) ['length']; i++){
          (this.formOrderRooms.get('orders') as FormArray).removeAt(0);
        }

        for(var i=0; i<filteredData.length; i++){
          (this.formOrderRooms.get('orders') as FormArray).push(this.formBuilder.control(filteredData[i].order));
        }

        this.dataSource.data=filteredData;
        this.loadedValues=this.formOrderRooms.value;
      }
    ))
  }

  goBack(){
    this.location.back();
  }

  save(){
    this.isSaved=true;
    
    let array1=this.formOrderRooms.value.orders;
    let array2=this.loadedValues.orders;
    if(array1.length === array2.length && array1.every((value, index) => value === array2[index])){
      this.isSame=true;
      this.loadedValues.orders=this.formOrderRooms.value.orders;
    }
    else{
      this.isSame=false;
      this.loadedValues.orders=this.formOrderRooms.value.orders;
    }
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
