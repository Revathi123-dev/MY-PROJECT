import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingproductComponent } from './addingproduct/addingproduct.component';
// import { AddnewcategoryComponent } from './addnewcategory/addnewcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AllcompaniesreportComponent } from './allcompaniesreport/allcompaniesreport.component';
import { CategoriesreportComponent } from './categoriesreport/categoriesreport.component';
import { CategoryComponent } from './category/category.component';
import { CompanyreportComponent } from './companyreport/companyreport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DshboardComponent } from './dshboard/dshboard.component';
import { HomeComponent } from './home/home.component';
import { InlineoneComponent } from './inlineone/inlineone.component';
import { LogoutComponent } from './logout/logout.component';
// import { InlinetwoComponent } from './inlinetwo/inlinetwo.component';
// import { HomeComponent } from './home/home.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { OrdersreportComponent } from './ordersreport/ordersreport.component';
import { PopupComponent } from './popup/popup.component';
import { PrintComponent } from './print/print.component';
import { ProductsreportComponent } from './productsreport/productsreport.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'mydashboard',component:MydashboardComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'companyreport',component:CompanyreportComponent},
  {path:'',redirectTo:'companyreport',pathMatch:'full'},
  {path:'inlineone',component:InlineoneComponent},
  {path:'',redirectTo:'inlineone',pathMatch:'full'},
  // {path:'inlinetwo',component:InlinetwoComponent},
  {path:'',redirectTo:'inlinetwo',pathMatch:'full'},
  {path:'',component:InlineoneComponent},
  {path:'productsreport',component:ProductsreportComponent},
  {path:'',redirectTo:'productsreport',pathMatch:'full'},
  {path:'Allcompaniesreport',component:AllcompaniesreportComponent},
  {path:'',redirectTo:'Allcompaniesreport',pathMatch:'full'},
  {path:'ordersreport',component:OrdersreportComponent},
  {path:'',redirectTo:'ordersreport',pathMatch:'full'},
  {path:'addingproduct',component:AddingproductComponent},
  {path:'',redirectTo:'addingproduct',pathMatch:'full'},
 {path:'category',component:CategoryComponent},
 {path:'',redirectTo:'CategoryComponent',pathMatch:'full'},
 {path:'categoriesreport',component:CategoriesreportComponent},
 {path:'',redirectTo:'CategoriesreportComponent',pathMatch:'full'},
 {path:'logout',component:LogoutComponent},
 {path:'',redirectTo:'LogoutComponent',pathMatch:'full'},
 {path:'print',component:PrintComponent},
 {path:'',redirectTo:'PrintComponent',pathMatch:'full'},
 {path:'dshboard',component:DshboardComponent},
 {path:'',redirectTo:'dshboard',pathMatch:'full'},
 {path:'popup',component:PopupComponent},
 {path:'',redirectTo:'popup',pathMatch:'full'}
 



  // {path:'Addnewcategory',component:AddnewcategoryComponent},
  // {path:'',redirectTo:'Addnewcategory',pathMatch:'full'},
  // {path:'category',component:CategoryComponent},

  // {path:'',redirectTo:'category',pathMatch:'full'}
  // {path:'',redirectTo:'MydashboardComponent',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
