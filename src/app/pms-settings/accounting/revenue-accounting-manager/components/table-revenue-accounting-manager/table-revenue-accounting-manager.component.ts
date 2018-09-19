import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { MatSort, MatPaginator, MatTableDataSource } from '../../../../../../../node_modules/@angular/material';
import { RevenueAccountLabelsService } from '../../../../services/revenue-account-labels.service';
import { RevenueAccountCategoriesService } from '../../../../services/revenue-account-categories.service';
import { RevenueAccountingManagerService } from '../../../../services/revenue-accounting-manager.service';
import { FormBuilder } from '../../../../../../../node_modules/@angular/forms';
import { Subscription, Observable, forkJoin } from '../../../../../../../node_modules/rxjs';
import { RevenueAccountingManager } from '../../../../../interfaces/revenue-accounting-manager';
import { SelectionModel } from '../../../../../../../node_modules/@angular/cdk/collections';
import { RevenueAccountLabel } from '../../../../../interfaces/revenue-account-label';
import { RevenueAccountCategory } from '../../../../../interfaces/revenue-account-category';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';
import { Location } from '../../../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-table-revenue-accounting-manager',
  templateUrl: './table-revenue-accounting-manager.component.html',
  styleUrls: ['./table-revenue-accounting-manager.component.css'],
  animations: [
    trigger('showList', [
      state('true', style({ display: 'block' })),
      state('false', style({ display: 'none' }))
    ])
  ]
})
export class TableRevenueAccountingManagerComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private location: Location,
    private revenueAccountingLabelsService: RevenueAccountLabelsService,
    private revenueAccountingCategoriesService: RevenueAccountCategoriesService,
    private revenueAccountingManagerService: RevenueAccountingManagerService,
    private formBuilder: FormBuilder
  ) { }

  private subscription = new Subscription();
  private dataSource = new MatTableDataSource<RevenueAccountingManager>();
  private selectedRows = new SelectionModel<any>(true, []);
  private isVisibleColumnList = false;
  private formRevenueLabels;



  private default: object = {
    revenueLabel: 0,
    revenueCategory: 0
  }

  private columns = [
    {
      propertyName: "id",
      title: "#",
      display: false
    },
    {
      propertyName: "name",
      title: "Item Name",
      display: true
    },
    {
      propertyName: "revenueLabels",
      title: "Revenue Account Label",
      display: true
    },
    {
      propertyName: "revenueCategories",
      title: "	Revenue Account Category ",
      display: true
    },
    {
      propertyName: "type",
      title: "Item Type",
      display: true
    }
  ];

  private displayedColumns: string[];
  private fixedColumns = ['select', 'action'];
  private pageSizeOptions = [3, 10, 20, 30, 50, 70, 100, 200];
  private _revenueAccountingManager: Observable<RevenueAccountingManager[]>;
  private _revenueLabels: Observable<RevenueAccountLabel[]>;
  private _revenueCategories: Observable<RevenueAccountCategory[]>;
  private revenueAccountingManager: RevenueAccountingManager[];
  private revenueLabels: RevenueAccountLabel[];
  private revenueCategories: RevenueAccountCategory[];

  ngOnInit() {

    this._revenueAccountingManager = this.revenueAccountingManagerService.getAll();
    this._revenueLabels = this.revenueAccountingLabelsService.getAll();
    this._revenueCategories = this.revenueAccountingCategoriesService.getAll();

    forkJoin([
      this._revenueAccountingManager,
      this._revenueLabels,
      this._revenueCategories
    ]).subscribe(data => {
      this.revenueAccountingManager = data[0],
        this.revenueLabels = data[1],
        this.revenueCategories = data[2]

      this.dataSource.data = data[0];
      console.log(this.formRevenueLabels.get("revenueLabels"))
        for (let i = 0; i < this.revenueAccountingManager.length; i++) {
          this.formRevenueLabels.get("revenueLabels").controls.push(
            this.formBuilder.group({
              value:this.revenueLabels[i]
            })
          )
        }
        console.log(this.formRevenueLabels.get("revenueLabels").controls[0])



    })

    this.formRevenueLabels = this.formBuilder.group({
      revenueLabels: this.formBuilder.array([])
    })

    this.displayedColumns = this.getDisplayedColumns();


  }
  getDisplayedColumns() {
    return this.columns.filter(item => item.display).map(item => { return item.propertyName });
  }

  isFixedColumn(propertyName) {
    return ArrayFunctions.inArray(propertyName, this.fixedColumns);
  }

  onSearch(value: string) {
    let filterValue = value.trim().toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  openColumnList() {
    this.isVisibleColumnList = !this.isVisibleColumnList;
  }

  getEditableColumns() {
    return this.columns.filter(item => !this.isFixedColumn(item.propertyName));
  }

  toggleColumn(propertyName, isChecked) {
    this.columns.map(
      item => {
        if (item.propertyName == propertyName)
          item.display = isChecked;
      }
    );
    this.displayedColumns = this.getDisplayedColumns();
  }

  onGroupDelete() {
    let selectedItems = this.selectedRows.selected;
    this.dataSource.data = this.dataSource.data.filter(item => !ArrayFunctions.inArray(item, selectedItems));
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
