import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { MatCommonModule } from '@angular/material/core';
// import { MatDialogModule } from '@angular/material/dialog';
// import {NgxPrintModule} from 'ngx-print';
// import { NgxPrintModule } from 'ngx-print/public_api';
import {NgxPrintModule} from 'ngx-print';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu'; 
// import {MatIconModule} from '@angular/material/icon';
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';  
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component'; 

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CompanyreportComponent } from './companyreport/companyreport.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import{MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddingproductComponent } from './addingproduct/addingproduct.component';
import { Observable } from 'rxjs';
import { InlineoneComponent } from './inlineone/inlineone.component';
import { ProductsreportComponent } from './productsreport/productsreport.component';
import { AllcompaniesreportComponent } from './allcompaniesreport/allcompaniesreport.component';
import { OrdersreportComponent } from './ordersreport/ordersreport.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesreportComponent } from './categoriesreport/categoriesreport.component';
import { LogoutComponent } from './logout/logout.component';
import { DshboardComponent } from './dshboard/dshboard.component';
import { PrintComponent } from './print/print.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { PopupComponent } from './popup/popup.component';
import { PrintreceiptComponent } from './printreceipt/printreceipt.component';
// import {NgModule} from '@angular/core'
// import { DshComponent } from './dsh/dsh.component';

// import { MatIconModule } from '@angular/material/icon/icon-module';
// import { AddnewcategoryComponent } from './addnewcategory/addnewcategory.component';
// import { ResetComponent } from './reset/reset.component';
// import { InlinetwoComponent } from './inlinetwo/inlinetwo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    MydashboardComponent,
    AddproductComponent,
    CompanyreportComponent,
    DialogComponent,
    InlineoneComponent,
    ProductsreportComponent,
    AllcompaniesreportComponent,
    OrdersreportComponent,
    CategoryComponent,
    CategoriesreportComponent,
    LogoutComponent,
    DshboardComponent,
    PrintComponent,
    AdministratorComponent,
    PopupComponent,
    PrintreceiptComponent,
    
    // DshComponent,
    // AddnewcategoryComponent,
    // ResetComponent,
    // InlinetwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
     MatIconModule,
    MatDividerModule ,
    MatListModule,
    // MatIconModule,
    FormsModule,
    ReactiveFormsModule,
     MatButtonModule,MatDialogModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatRadioModule,
     HttpClientModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     BrowserModule,
     CommonModule,
     MatCommonModule,
     NgxPrintModule
//  NgxPrintModule

    //  MatDialogModule
    //  AddingproductComponent 
     
    //  Router
     

    
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
