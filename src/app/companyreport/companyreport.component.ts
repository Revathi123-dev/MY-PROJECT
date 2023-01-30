import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-companyreport',
  templateUrl: './companyreport.component.html',
  styleUrls: ['./companyreport.component.scss']
})
export class CompanyreportComponent implements OnInit {
  // listData :any;
  title="dsh1";
  displayedColumns: string[] = ['productName','code', 'category','date', 'freshness','stock','price','comment','Action',];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  


  constructor(private dialog : MatDialog, private api : ApiService,private router:Router,private dialogRef:MatDialog) { 
   //private api:ApiService for injecting the api service we need this parameter in constructor compulsory.

  }

  buttonclick() {
    this.router.navigate(['/inlineone']);
  }
  
  ngOnInit(): void {
    this.getAllProducts();

    
  }
  
  openDialog() {
this.dialog.open(DialogComponent,{
 width:'35%'
}).afterClosed().subscribe(val=>{
  if(val == 'save'){
    this.getAllProducts();
  }
})
}
//bringing our data to company report by using get call
getAllProducts(){
 this.api.getProduct()//for getting the product it is used because this is an reference variable so.
 .subscribe({//here subscribe means it is going to observes if any updates or not if updates are happened then it will execute the code
  next:(res)=>{
    // console.log(res);
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;

  },
  error:(err)=>{
    alert("error while fetching the records!!" )
  }
 })
}
deleteProduct(id:number){
  this.api.deleteProduct(id)
  .subscribe({
    next:(res)=>{
      alert("product deleted successfully")
    },
    error:()=>{
      alert("error while deleting the product!!")
    }
  })
}
editProduct(row:any){
  this.dialog.open(DialogComponent,{
  width:'35%',
  data:row
  }).afterClosed().subscribe(val=>{
    if(val === 'update'){
      this.getAllProducts();
    }
  })

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
opendialog(){
  this.dialogRef.open(PopupComponent) }
}

