import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminLinksResolver } from './pms-settings/resolvers/admin-links.resolver';
import { PmsLayoutComponent } from './shared/layouts/pms-layout/pms-layout.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'pms-settings',
    component: PmsLayoutComponent,
    resolve: {
      links: AdminLinksResolver
    },
    children:[
      {
        path: '',
        loadChildren: './pms-settings/pms-settings.module#PmsSettingsModule'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
