import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { MatSort, MatPaginator, MatDialog, MatTableDataSource } from '../../../../../../../node_modules/@angular/material';
import { AdjustmentReasonDepartmentsService } from '../../../../services/adjustment-reason-departments.service';
import { AdjustmentReasonDepartmentsDataService } from '../../../../services/adjustment-reason-departments-data.service';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { FormBuilder } from '../../../../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { AdjustmentReasonDepartment } from '../../../../../interfaces/adjustment-reason-department';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { FormAdjustmentReasonDepartmentsComponent } from '../form-adjustment-reason-departments/form-adjustment-reason-departments.component';

@Component({
  selector: 'app-table-adjustment-reason-departments',
  templateUrl: './table-adjustment-reason-departments.component.html',
  styleUrls: ['./table-adjustment-reason-departments.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TableAdjustmentReasonDepartmentsComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private adjustmentReasonDepartmentsService:AdjustmentReasonDepartmentsService,
    private adjustmentReasonDepartmentsDataService:AdjustmentReasonDepartmentsDataService,
    private location:Location,
    private formBuilder:FormBuilder,
    private adjustmentReasonDepartmentsDialog:MatDialog,
  ) { }

  private subscription=new Subscription();
  private dataSource=new MatTableDataSource<AdjustmentReasonDepartment>();
  private selectedRows=new SelectionModel<any>(true,[]);
  private isVisibleColumnList=false;

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
      title:"Department Code",
      display:true
    },
    {
      propertyName:"title",
      title:"Department",
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
  private selectedStatus:string = "0";

  private default : object={
    statusActive:0,
    statusDelete:1
  }

  ngOnInit() {
    this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.adjustmentReasonDepartmentsService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data
        console.log(data)
       this.adjustmentReasonDepartmentsDataService.adjustmentReasonDepartmentsData.next(data)

      }
    ));

    this.subscription.add(this.adjustmentReasonDepartmentsDataService.adjustmentReasonDepartmentsData$.subscribe(
      data=>{
        this.dataSource.data=data;
        console.log(data);
      }
    ));

    this.getFilteredData(this.selectedStatus);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  getFilteredData(activStatus, filteredData?){
    console.log(activStatus);
    this.subscription.add(this.adjustmentReasonDepartmentsService.getAll().subscribe(
      data=>{
        var checkStatus = (checkData)=>{
          activStatus === undefined ? this.dataSource.data = checkData : (
            activStatus==0 ? this.filterDataBySelectedStatus(checkData, this.default['statusActive']):
          this.filterDataBySelectedStatus(checkData, this.default['statusDelete'])
          );
        }
        filteredData==null?checkStatus(data):checkStatus(filteredData)
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
    //this.dataSource.data=this.dataSource.data.filter(item=> !ArrayFunctions.inArray(item,selectedItems));
    for(let i=0;i<this.dataSource.data.length;i++){
      if(selectedItems[i]==this.dataSource.data[i]){
        this.dataSource.data[i].status=false;
      }
    }

    this.getFilteredData(this.selectedStatus,this.dataSource.data)
  }

  openAddEditDialog(id?){
    
 
    let adjustmentReasonDepartmentDialogRef=this.adjustmentReasonDepartmentsDialog.open(FormAdjustmentReasonDepartmentsComponent,{
      width:'60%',
      height:'50%',
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
