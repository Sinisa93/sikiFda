import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PosProductsService } from '../../../../services/pos-products.service';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '../../../../../../../node_modules/@angular/material';
import { PosProductsDataService } from '../../../../services/pos-products-data.service';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { PosProduct } from '../../../../../interfaces/pos-product';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { FormPosProductsComponent } from '../form-pos-products/form-pos-products.component';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { PosPointsService } from '../../../../services/pos-points.service';
import { PosCategoriesService } from '../../../../services/pos-categories.service';
import { PosPoint } from '../../../../../interfaces/pos-point';
import { PosCategory } from '../../../../../interfaces/pos-category';
import { FormBuilder, FormControl } from '../../../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-table-pos-products',
  templateUrl: './table-pos-products.component.html',
  styleUrls: ['./table-pos-products.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TablePosProductsComponent implements OnInit, OnDestroy {


  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private posProductService:PosProductsService,
    private location:Location,
    private posProductsDialog:MatDialog,
    private posProductsDataService:PosProductsDataService,
    private posPointsService:PosPointsService,
    private posCategoriesService:PosCategoriesService,
    private formBuilder:FormBuilder
    
  ) { }

    private subscription = new Subscription();
    private dataSource = new MatTableDataSource<PosProduct>();
    private selectedRows = new SelectionModel<any>(true,[]);
    private isVisibleColumnList=false;
    filterForm;

    private columns=[
      {
        propertyName:"id",
        title:"#",
        display:true      
      },
      {
        propertyName:"select",
        title:"",
        display:true
      },
      {
        propertyName:"name",
        title:"#ID",
        display:true
      },
      {
        propertyName:"title",
        title:"POS Product",
        display:true
      },
      {
        propertyName:"price",
        title:"Price",
        display:true
      },
      {
        propertyName:"category",
        title:"POS Category",
        display:true
      },
      {
        propertyName:"posPoint",
        title:"POS Point",
        display:true
      },
      {
        propertyName:"status",
        title:"Status",
        display:true
      },
      {
        propertyName:"description",
        title:"Description",
        display:false
      },
      {
        propertyName:"action",
        title:"Action",
        display:true
      }
    ];

    private displayedColumns:string[];
    private fixedColumns=['select','action'];
    private pageSizeOptions=[3,10,20,30,50,70,100,200];
    private selectedPoint:string;
    private selectedCategory:string;

    private posPoints:PosPoint[];
    private posCategories:PosCategory[];

    private default:object={
      posPointsOption:0,
      posCategoriesOption:0,
      allPoints: '- All Pos Points -',
      allCategories: '- All Pos Categories -'
    }

  ngOnInit() {

    this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.posProductService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data
        this.posProductsDataService.posProductsData.next(data)
        this.selectedPoint="- All Pos Points -";
      }
      
    ));

    this.subscription.add(this.posPointsService.getAll().subscribe(
      data=>{
        this.posPoints=data;
      }
    ));

    this.subscription.add(this.posCategoriesService.getAll().subscribe(
      data=>{
        this.posCategories=data

      }
    ));

    this.subscription.add(this.posProductsDataService.posProductsData$.subscribe(
      data=>{
        this.dataSource.data=data;
        console.log(data);
      }
    ));

    this.getFilteredData(this.selectedPoint, this.selectedCategory); 

    this.filterForm=this.formBuilder.group({
      posPoint:new FormControl("- All Pos Points -"),
      category:new FormControl("- All Pos Categories -")
    });

        //mat i paginacija
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

  //openDialog
  openAddEditDialog(id?){
    
 
    let posPointsDialogRef=this.posProductsDialog.open(FormPosProductsComponent,{
      width:'60%',
      height:'90%',
      data:{
        id:id
      }
  });
}

getFilteredData(activePosPoint, activePosCategory){
  console.log(activePosPoint);
 this.subscription.add(this.posProductService.getAll().subscribe(
   data=>{
     if(!this.isCategorySelected(activePosCategory) && !this.isPointSelected(activePosPoint)){
       this.dataSource.data = data;
     }
    if(this.isPointSelected(activePosPoint) && !this.isCategorySelected(activePosCategory)){
      activePosPoint == this.default['allPoints'] ? this.dataSource.data=data : this.filterDataBySelectedPoint(data);
      console.log(activePosPoint)
  }

  if(!this.isPointSelected(activePosPoint) && this.isCategorySelected(activePosCategory)){
    
    activePosCategory == this.default['allCategories'] ? this.dataSource.data=data : this.filterDataBySelectedCategory(data);
  }
  if(this.isPointSelected(activePosPoint) && this.isCategorySelected(activePosCategory)){
    var self=this;
    this.filterDataBySelectedPoint(data,function(x){self.filterDataBySelectedCategory(x)})
  }
   }
 ))
}

isPointSelected(posPoint){
  if(posPoint!=this.default['allPoints'] && posPoint!=undefined){
    return true;
  }
  return false;
}
isCategorySelected(category){
  if(category!=this.default['allCategories'] && category!=undefined){
    return true;
  }
  return false;
}

filterDataBySelectedPoint(data, callback?){
  this.dataSource.data=data.filter(item => item.posPoint['title']==this.selectedPoint);
  callback!=null ? callback(this.dataSource.data) : null;
}

filterDataBySelectedCategory(data){
  this.dataSource.data=data.filter(item => item.category['title']==this.selectedCategory);
}

getDataByPoint(event, posPointTitle){
  if(event.isUserInput){
    console.log(posPointTitle);
    this.selectedPoint=posPointTitle;
    this.getFilteredData(this.selectedPoint,this.selectedCategory);
  }
}

getDataByCategory(event, posCategoryTitle){
  if(event.isUserInput){
    console.log(posCategoryTitle);
    this.selectedCategory=posCategoryTitle;
    this.getFilteredData(this.selectedPoint,this.selectedCategory);
    }
  }

  goBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}

