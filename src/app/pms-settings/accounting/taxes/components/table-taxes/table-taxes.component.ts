import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TaxesService } from '../../../../services/taxes.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '../../../../../../../node_modules/@angular/material';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { Tax } from '../../../../../interfaces/tax';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { FormTaxesComponent } from '../form-taxes/form-taxes.component';
import { TaxesDataService } from '../../../../services/taxes-data.service';

@Component({
  selector: 'app-table-taxes',
  templateUrl: './table-taxes.component.html',
  styleUrls: ['./table-taxes.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableTaxesComponent implements OnInit, OnDestroy {

  //childView
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private taxesService:TaxesService,
    private location:Location,
    private taxesDialog:MatDialog,
    private taxesDataService:TaxesDataService
  ) { }

  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<Tax>();
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
      title:"Title",
      display:true      
    },
    {
      propertyName:"tax",
      title:"Value",
      display:true      
    },
    {
      propertyName:"status",
      title:"Status",
      display:true      
    },
    {
      propertyName:"isPerReservation",
      title:"Is per reservation",
      display:false      
    },
    {
      propertyName:"isInclusiveTax",
      title:"Inclusive Tax",
      display:false      
    },
    {
      propertyName:"action",
      title:"Action",
      display:true
    },
  ];

  private displayedColumns:string[];
  private fixedColumns=['select','action'];
  private pageSizeOptions=[3,10,20,30,50,70,100,200];

  ngOnInit() {
    this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.taxesService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data
        console.log(data);

        this.taxesDataService.taxesData.next(data);
 
      }
    ));

    this.subscription.add(this.taxesDataService.taxesData$.subscribe(
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
    let taxesDialogRef=this.taxesDialog.open(FormTaxesComponent,{
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
