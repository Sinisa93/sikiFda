import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PosCategoriesService } from '../../../../services/pos-categories.service';
import { FormBuilder, FormGroup, FormArray } from '../../../../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '../../../../../../../node_modules/@angular/material';
import { PosCategory } from '../../../../../interfaces/pos-category';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-table-pos-categories',
  templateUrl: './table-pos-categories.component.html',
  styleUrls: ['./table-pos-categories.component.css'],
  animations: [
    trigger('showList',[
      state('true', style({display:'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TablePosCategoriesComponent implements OnInit, OnDestroy {

  //ViewChild
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(
    private posCategoriesService:PosCategoriesService,
    private location:Location,
    private formBuilder: FormBuilder
  ) { }

  private subscription=new Subscription();
  private dataSource=new MatTableDataSource<PosCategory>();
  private selectedRows=new SelectionModel<any>(true, []);
  private isVisibleColumnList :boolean=false;

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
      title : "POS Categories",
      display: true
    },
    {
      propertyName : "products",
      title : "Products",
      display: true
    },
    {
      propertyName : "point",
      title : "POS Point",
      display: true
    },
    {
      propertyName : "status",
      title : "Status",
      display: true
    },
    {
      propertyName : "description",
      title : "Description",
      display: false
    },
    {
      propertyName : "action",
      title : "Action",
      display: true
    },
  ];

  private channels = [
    {
      "id":1,
      "name":"Store"
    },
    {
      "id":2,
      "name":"Test Point"
    }
  ];

  private displayedColumns : string[];
  private fixedColumns = ['select', 'products', 'action'];
  private pageSizeOptions=[3,10,20,30,50,70,100,200];

  formPosCategories : FormGroup = this.formBuilder.group({
    posCategories: this.formBuilder.array([]),
  });

  private loadedValues;

  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();
    this.fillTable('Store');
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

  onGroupDelete(){
    let selectedItems= this.selectedRows.selected;
    this.dataSource.data=this.dataSource.data.filter(item=> !ArrayFunctions.inArray(item,selectedItems));
  }

  //onChannelSearch, FillTable
  onChannelSearch(isValueChanged, channelName:string){
    if(isValueChanged){
      this.fillTable(channelName);
    }
  }

  fillTable(filterBy?){
    this.subscription.add(this.posCategoriesService.getAll().subscribe(
      data =>{
        console.log(data);
        let filteredData = data.filter(item => item['channel'].name == filterBy);

        for(var i=0; i<= (this.formPosCategories.get('posCategories') as FormArray) ['length']; i++){
          (this.formPosCategories.get('posCategories') as FormArray).removeAt(0);
        }

        for(var i=0; i<filteredData.length; i++){
          (this.formPosCategories.get('posCategories') as FormArray).push(this.formBuilder.control(filteredData[i].point));
        }

        this.dataSource.data=filteredData;
        this.loadedValues=this.formPosCategories.value;
      }
    ));
  }

  goBack(){
    this.location.back();
  }

  //ngOnDestroy
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
