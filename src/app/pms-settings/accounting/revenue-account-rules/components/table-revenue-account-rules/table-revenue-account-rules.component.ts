import { Component, OnInit, OnDestroy } from '@angular/core';
import { RevenueAccountLabelsService } from '../../../../services/revenue-account-labels.service';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { RevenueAccountCategoriesService } from '../../../../services/revenue-account-categories.service';
import { RevenueAccountRulesService } from '../../../../services/revenue-account-rules.service';
import { Subscription } from '../../../../../../../node_modules/rxjs';
import { MatTableDataSource } from '../../../../../../../node_modules/@angular/material';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { RevenueAccountLabel } from '../../../../../interfaces/revenue-account-label';
import { RevenueAccountCategory } from '../../../../../interfaces/revenue-account-category';
import { RevenueAccountRule } from '../../../../../interfaces/revenue-account-rule';

@Component({
  selector: 'app-table-revenue-account-rules',
  templateUrl: './table-revenue-account-rules.component.html',
  styleUrls: ['./table-revenue-account-rules.component.css']
})
export class TableRevenueAccountRulesComponent implements OnInit, OnDestroy {

  constructor(
    private revenueAccountLabelsService:RevenueAccountLabelsService,
    private revenueAccountCategoriesService:RevenueAccountCategoriesService,
    private revenueAccountRulesService:RevenueAccountRulesService,
    private location:Location,
    
  ) { }

  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<any>([]);
  private selectedRows = new SelectionModel<any>(true,[]);
  private revenueLabels: RevenueAccountLabel[];
  private revenueCategories: RevenueAccountCategory[];
  private revenueRules:RevenueAccountRule[];
  private ds = [];
  private everything : any;
  private columns=[

    {
      propertyName:"title1",
      title:"Revenue Label",
      display:true
    },
    {
      propertyName:"title2",
      title:"Revenue Category",
      display:true
    },
    {
      propertyName:"title3",
      title:"Rule Description",
      display:true
    }
  ];

  private displayedColumns:string[];


  ngOnInit() {
     this.displayedColumns=this.getDisplayedColumns();

    this.subscription.add(this.revenueAccountLabelsService.getAll().subscribe(
      (data:any[])=>{
        this.revenueLabels=data;
        this.dataSource.data.push(data)
      }

    ));

    this.subscription.add(this.revenueAccountCategoriesService.getAll().subscribe(
      (data:any[])=>{
        this.revenueCategories=data;
        this.dataSource.data.push(data)
      }

    ));

    this.subscription.add(this.revenueAccountRulesService.getAll().subscribe(
      (data:any[])=>{
        this.revenueRules=data;
        this.dataSource.data.push(data)
      }   
    ));
    this.everything = this.dataSource.data;
    setTimeout(() => {
      
      console.log(this.everything)
    }, 1000);
  }

  log(val) { console.log(val); }

  getDisplayedColumns(){
    return this.columns.filter(item => item.display).map(item => {return item.propertyName});
  }

  goBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
