import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { RevenueAccountLabelsService } from '../../../../services/revenue-account-labels.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '../../../../../../../node_modules/@angular/material';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { RevenueAccountLabel } from '../../../../../interfaces/revenue-account-label';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { FormRevenueAccountLabelsComponent } from '../form-revenue-account-labels/form-revenue-account-labels.component';
import { RevenueAccountLabelsDataService } from '../../../../services/revenue-account-labels-data.service';

@Component({
  selector: 'app-table-revenue-account-labels',
  templateUrl: './table-revenue-account-labels.component.html',
  styleUrls: ['./table-revenue-account-labels.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableRevenueAccountLabelsComponent implements OnInit, OnDestroy {

  //child View
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private revenueAccountLabelsService:RevenueAccountLabelsService,
    private location:Location,
    private revenueAccountLabelsDialog:MatDialog,
    private revenueAccountLabelsDataService:RevenueAccountLabelsDataService
  ) { }

  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<RevenueAccountLabel>();
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
      title:"Revenue Account Label",
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

    this.subscription.add(this.revenueAccountLabelsService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data,
        this.revenueAccountLabelsDataService.RevenueAccountLabelsData.next(data);        
      }

    ));
    //getAll i add
    this.subscription.add(this.revenueAccountLabelsDataService.RevenueAccountLabelsData$.subscribe(
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
    let revenueAccountLabelsDialogRef=this.revenueAccountLabelsDialog.open(FormRevenueAccountLabelsComponent,{
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
