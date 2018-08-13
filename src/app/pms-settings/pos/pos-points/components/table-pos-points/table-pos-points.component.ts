import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PosPointsService } from '../../../../services/pos-points.service';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '../../../../../../../node_modules/@angular/material';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { PosPoint } from '../../../../../interfaces/pos-point';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { trigger, style, state } from '../../../../../../../node_modules/@angular/animations';
import { FormPosPointsComponent } from '../form-pos-points/form-pos-points.component';
import { PosPointsDataService } from '../../../../services/pos-points-data.service';

@Component({
  selector: 'app-table-pos-points',
  templateUrl: './table-pos-points.component.html',
  styleUrls: ['./table-pos-points.component.css'],
  animations:[
    trigger('showList',[
      state('true', style({display: 'block'})),
      state('false', style({display:'none'}))
    ])
  ]
})
export class TablePosPointsComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private posPointsService:PosPointsService,
    private location:Location,
    private posPointsDialog:MatDialog,
    private posPointsDataService:PosPointsDataService
  ) { }

  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<PosPoint>();
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
      title:"POS Points",
      display:true
    },
    {
      propertyName:"categories",
      title:"Categories",
      display:true
    },
    {
      propertyName:"products",
      title:"Products",
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
  private fixedColumns=['select','action', 'categories', 'products'];
  private pageSizeOptions=[5,10,20,30,50,70,100,200];

  ngOnInit() {
    this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.posPointsService.getAll().subscribe(
      (data:any[])=>{
        this.dataSource.data=data,
        this.posPointsDataService.posPointsData.next(data)
        
      }
    ));

    this.subscription.add(this.posPointsDataService.posPointsData$.subscribe(
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
    
 
    let posPointsDialogRef=this.posPointsDialog.open(FormPosPointsComponent,{
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
//doraditi html redirekciju za kategorije i produkte, dvrsiti paginaciju, sortiranje... add, edit, brisanje, dugmici... 