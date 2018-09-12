import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatCheckboxModule, MatButtonModule, MatSortModule, MatMenuModule, MatListModule, MatExpansionModule, MatIconModule, MatPaginatorModule, MatInputModule, MatDialogModule, MatFormFieldModule, MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatAutocompleteModule, MatSelectModule } from '@angular/material';
import { PmsLayoutComponent } from './layouts/pms-layout/pms-layout.component';
import { NavLinksPmsComponent } from './layouts/pms-layout/nav-links-pms/nav-links-pms.component';
import { FooterPmsComponent } from './layouts/pms-layout/footer-pms/footer-pms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSortModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    
  ],
  exports: [ PmsLayoutComponent, NavLinksPmsComponent,FooterPmsComponent, MatTableModule, MatCheckboxModule, MatButtonModule, MatSortModule, MatMenuModule, MatListModule, MatExpansionModule, MatIconModule, MatPaginatorModule, MatInputModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule, FormsModule, MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatAutocompleteModule, MatSelectModule ],
  declarations: [ PmsLayoutComponent, NavLinksPmsComponent,FooterPmsComponent ]
})
export class SharedModule { }
