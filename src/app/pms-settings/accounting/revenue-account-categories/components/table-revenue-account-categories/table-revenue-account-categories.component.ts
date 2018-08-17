import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort, MatPaginator, MatDialog, MatTableDataSource } from '../../../../../../../node_modules/@angular/material';
import { RevenueAccountCategoriesService } from '../../../../services/revenue-account-categories.service';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { RevenueAccountCategoriesDataService } from '../../../../services/revenue-account-categories-data.service';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { RevenueAccountCategory } from '../../../../../interfaces/revenue-account-category';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { FormRevenueAccountCategoriesComponent } from '../form-revenue-account-categories/form-revenue-account-categories.component';

@Component({
  selector: 'app-table-revenue-account-categories',
  templateUrl: './table-revenue-account-categories.component.html',
  styleUrls: ['./table-revenue-account-categories.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableRevenueAccountCategoriesComponent implements OnInit, OnDestroy {
  
  //child view

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private revenueAccountCategoriesService:RevenueAccountCategoriesService,
    private location:Location,
    private revenueAccountCategoriesDialog:MatDialog,
    private revenueAccountCategoriesDataService:RevenueAccountCategoriesDataService
  ) { }

  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<RevenueAccountCategory>();
  private selectedRows = new SelectionModel<any>(true,[]);
  private isVisibleColumnList=false;
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
      propertyName:"title",
      title:"Revenue Account Category",
      display:true
    },
    {
      propertyName:"status",
      title:"Status",
      display:true
    },
    {
      propertyName:"action",
      title:"Action",
      display:true
    }
  ];

  private displayedColumns:string[];
  private fixedColumns=['select','action'];
  private pageSizeOptions=[5,10,20,30,50,70,100,200];



  ngOnInit() {
    this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.revenueAccountCategoriesService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data,
        this.revenueAccountCategoriesDataService.RevenueAccountCategoriesData.next(data);        
      }

    ));

    this.subscription.add(this.revenueAccountCategoriesDataService.RevenueAccountCategoriesData$.subscribe(
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
    let revenueAccountCategoriesDialogRef=this.revenueAccountCategoriesDialog.open(FormRevenueAccountCategoriesComponent,{
      width:'50%',
      height:'40%',
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
