import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'revenue-account-labels',
    loadChildren: './revenue-account-labels/revenue-account-labels.module#RevenueAccountLabelsModule'
  },
  {
    path: 'revenue-account-categories',
    loadChildren: './revenue-account-categories/revenue-account-categories.module#RevenueAccountCategoriesModule'
  },
  {
    path: 'taxes',
    loadChildren: './taxes/taxes.module#TaxesModule'
  },
  {
    path: 'credit-card-types',
    loadChildren: './credit-card-types/credit-card-types.module#CreditCardTypesModule'
  },
  {
    path: 'currency',
    loadChildren: './currency/currency.module#CurrencyModule'
  },
  {
    path: 'credit-card-purge',
    loadChildren: './credit-card-purge/credit-card-purge.module#CreditCardPurgeModule'
  },
  {
    path: 'invoice',
    loadChildren: './invoice/invoice.module#InvoiceModule'
  },
  {
    path: 'revenue-account-rules',
    loadChildren: './revenue-account-rules/revenue-account-rules.module#RevenueAccountRulesModule'
  },
  {
    path: 'night-audit-settings',
    loadChildren: './night-audit-settings/night-audit-settings.module#NightAuditSettingsModule'
  },
  {
    path: 'fiscal-year',
    loadChildren: './fiscal-year/fiscal-year.module#FiscalYearModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
