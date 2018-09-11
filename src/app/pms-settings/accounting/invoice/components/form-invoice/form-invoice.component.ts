import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { Subscription } from '../../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-form-invoice',
  templateUrl: './form-invoice.component.html',
  styleUrls: ['./form-invoice.component.css']
})
export class FormInvoiceComponent implements OnInit, OnDestroy {

  constructor(
    private location:Location
  ) { }

  private subscription=new Subscription();
  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
