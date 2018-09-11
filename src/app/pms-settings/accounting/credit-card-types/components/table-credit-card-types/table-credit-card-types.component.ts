import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { MatSort, MatPaginator, MatDialog, MatTableDataSource } from '../../../../../../../node_modules/@angular/material';
import { CreditCardTypesService } from '../../../../services/credit-card-types.service';
import { CreditCardTypesDataService } from '../../../../services/credit-card-types-data.service';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { CreditCardType } from '../../../../../interfaces/credit-card-type';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { FormCreditCardTypesComponent } from '../form-credit-card-types/form-credit-card-types.component';

@Component({
  selector: 'app-table-credit-card-types',
  templateUrl: './table-credit-card-types.component.html',
  styleUrls: ['./table-credit-card-types.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableCreditCardTypesComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private creditCardTypesService:CreditCardTypesService,
    private location:Location,
    private creditCardTypesDialog:MatDialog,
    private creditCardTypesDataService:CreditCardTypesDataService
  ) { }

  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<CreditCardType>();
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
      title:"Accepted Credit Cards",
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

    this.subscription.add(this.creditCardTypesService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data,
        this.creditCardTypesDataService.creditCardTypesData.next(data);        
      }

    ));

    this.subscription.add(this.creditCardTypesDataService.creditCardTypesData$.subscribe(
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
    let revenueAccountLabelsDialogRef=this.creditCardTypesDialog.open(FormCreditCardTypesComponent,{
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
