import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-productsreport',
  templateUrl: './productsreport.component.html',
  styleUrls: ['./productsreport.component.scss']
})
export class ProductsreportComponent implements OnInit {


  usersArray=[
    {
      "id":1,
      "code":"M10001gg",
      "name":"Oreo Biscuits",
      "category":"Biscuits",
      "cost":"2",
      // "websites":"surekha.com",
      "isEdit":false

    },
    {
      "id":2,
      "code":"M10002",
      "name":"Mustard Oil",
      "category":"oil",
      "cost":"1.50",
      // "websites":"renuka.com",
      "isEdit":false
    },
    {
      "id":3,
      "code":"M10003",
      "name":"Maggi",
      "category":"Noodles",
      "cost":"1.50",
      // "websites":"rahul.com",
      "isEdit":false
    },
    {
      "id":4,
      "code":"M10004",
      "name":"Chilly Sous",
      "category":"Noodles",
      "cost":"1",
      // "websites":"raghav.com",
      "isEdit":false
    },
    {
      "id":5,
      "code":"M10005",
      "name":"Haldiram Namkeen",
      "category":"Namkeen",
      "cost":"10",
      // "websites":"raghunath.com",
      "isEdit":false
    },
    {
      "id":6,
      "code":"M10006",
      "name":"Macroni",
      "category":"spices",
      "cost":"10",
      // "websites":"kiran.com",
      "isEdit":false
    }
  ]

  constructor(private router:Router,private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  onEdit(item:any){
    debugger;
   this.usersArray.forEach(element=>{
    element.isEdit = false;



    })
    item.isEdit=true;

  }

  buttonclick() {
    this.router.navigate(['/Allcompaniesreport']);
  }
  ondelete(data:any){
    console.log(data);
    this.usersArray.splice(data,1);
    
  }
  opendialog(){
    this.dialogRef.open(PopupComponent) }
  }



