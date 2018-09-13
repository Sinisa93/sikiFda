import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AdjustmentReasonListsService } from '../../../../services/adjustment-reason-lists.service';
import { AdjustmentReasonListsDataService } from '../../../../services/adjustment-reason-lists-data.service';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { FormBuilder } from '../../../../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '../../../../../../../node_modules/@angular/material';
import { AdjustmentReasonList } from '../../../../../interfaces/adjustment-reason-list';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-table-adjustment-reason-lists',
  templateUrl: './table-adjustment-reason-lists.component.html',
  styleUrls: ['./table-adjustment-reason-lists.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableAdjustmentReasonListsComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private adjustmentReasonListsService:AdjustmentReasonListsService,
    private adjustmentReasonListsDataService:AdjustmentReasonListsDataService,
    private location:Location,
    private formBuilder:FormBuilder
  ) { }

  private subscription=new Subscription();
  private dataSource=new MatTableDataSource<AdjustmentReasonList>();
  private selectedRows=new SelectionModel<any>(true,[]);
  private isVisibleColumnList=false;
  filterForm;

  private columns=[
    {
      propertyName:"id",
      title:"#",
      display:false      
    },
    {
      propertyName:"select",
      title:"",
      display:true
    },
    {
      propertyName:"code",
      title:"Adjustment Reason Code",
      display:true
    },
    {
      propertyName:"title",
      title:"Adjustment Reasons",
      display:true
    },
    {
      propertyName:"status",
      title:"Status",
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
  private selectedStatus:string;

  private default : object={
    statusActive:0,
    statusDelete:1
  }
  ngOnInit() {

    this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.adjustmentReasonListsService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data
        // this.adjustmentReasonListsDataService.adjustmentReasonListsData.next(data)
        // this.selectedPoint="- All Pos Points -";
      }

     
      
    ));
    this.getFilteredData(this.selectedStatus);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  getFilteredData(activStatus){
    this.subscription.add(this.adjustmentReasonListsService.getAll().subscribe(
      data=>{
        (checkData)=>{
          activStatus === undefined ? this.dataSource.data = checkData : (
            activStatus==0 ? this.filterDataBySelectedStatus(checkData, this.default['statusActive']):
          this.filterDataBySelectedStatus(checkData, this.default['statusDelete'])
          );
        }
      }
    ));
 
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }
  
  filterDataBySelectedStatus(data, status){
    if(status==this.default['statusActive']){
      this.dataSource.data=data.filter(item=>item.status==true);
    }
    if(status==this.default['statusDelete']){
      this.dataSource.data=data.filter(item=>item.status==false);
    }
  }

  getDataByStatus(value){
    this.selectedStatus=value;
    this.getFilteredData(this.selectedStatus);
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

//   openAddEditDialog(id?){
    
 
//     let posPointsDialogRef=this.posProductsDialog.open(FormPosProductsComponent,{
//       width:'60%',
//       height:'90%',
//       data:{
//         id:id
//       }
//   });
// }


  goBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  } 


}
