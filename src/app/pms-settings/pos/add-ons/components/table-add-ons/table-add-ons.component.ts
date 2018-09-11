import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { MatSort, MatPaginator, MatDialog, MatTableDataSource } from '../../../../../../../node_modules/@angular/material';
import { AddOnsService } from '../../../../services/add-ons.service';
import { AddOnsDataService } from '../../../../services/add-ons-data.service';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { AddOn } from '../../../../../interfaces/add-on';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { FormAddOnsComponent } from '../form-add-ons/form-add-ons.component';
import { Location } from '../../../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-table-add-ons',
  templateUrl: './table-add-ons.component.html',
  styleUrls: ['./table-add-ons.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableAddOnsComponent implements OnInit,OnDestroy {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private addOnsService:AddOnsService,
    private location:Location,
    private addOnsDialog:MatDialog,
    private addOnsDataService:AddOnsDataService,
  ) { }
  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<AddOn>();
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
      propertyName:"price",
      title:"Price",
      display:true
    },
    {
      propertyName:"type",
      title:"Type",
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
    },
    {
      propertyName:"description",
      title:"Description",
      display:false
    }
  ];

  private displayedColumns:string[];
  private fixedColumns=['select','action'];
  private pageSizeOptions=[3,10,20,30,50,70,100,200];

  ngOnInit() {
    this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.addOnsService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data
        this.addOnsDataService.addOnsData.next(data)
        
      }
    ));

    this.subscription.add(this.addOnsDataService.addOnsData$.subscribe(
      data=>{
        this.dataSource.data=data;
      }
    ));

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
    
 
    let posPointsDialogRef=this.addOnsDialog.open(FormAddOnsComponent,{
      width:'60%',
      height:'90%',
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
