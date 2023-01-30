import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-categoriesreport',
  templateUrl: './categoriesreport.component.html',
  styleUrls: ['./categoriesreport.component.scss']
})
export class CategoriesreportComponent implements OnInit {
  // AuthService:any;

  usersArray=[
    {
      "id":1,
      // "code":"M10001gg",
      "name":"Biscuits",
      "Description":"Biscuits Company",
      // "cost":"2",
      // "websites":"surekha.com",
      "isEdit":false

    },
    {
      "id":2,
      // "code":"M10002",
      "name":"Oil",
      "Description":"Oil Category",
      // "cost":"1.50",
      // "websites":"renuka.com",
      "isEdit":false
    },
    {
      "id":3,
      // "code":"M10003",
      "name":"Noodles",
      "Description":"Noodles Category",
      // "cost":"1.50",
      // "websites":"rahul.com",
      "isEdit":false
    },
    {
      "id":4,
      // "code":"M10004",
      "name":"Namkeen",
      "Description":" Namkeen Category",
      // "cost":"1",
      // "websites":"raghav.com",
      "isEdit":false
    },
    {
      "id":5,
      // "code":"M10005",
      "name":"Spices",
      "Description":"Spices category",
      // "cost":"10",
      // "websites":"raghunath.com",
      "isEdit":false
    },
    {
      "id":6,
      // "code":"M10006",
      "name":"Kissan",
      "Description":"Jam Category",
      // "cost":"10",
      // "websites":"kiran.com",
      "isEdit":false
    }
  ]

  constructor(private router:Router,private dialogRef:MatDialog) { }
  // buttonclick() {
  //   this.router.navigate(['/ordersreport']);
  // }

  ngOnInit(): void {
  }
  buttonclick() {
    this.router.navigate(['/logout']);
    alert("you have successfully logged out!")
  }
  onEdit(item:any){
    debugger;
   this.usersArray.forEach(element=>{
    element.isEdit = false;



    })
    item.isEdit=true;

  }
  ondelete(data:any){
    console.log(data);
    this.usersArray.splice(data,1);
    
  }
  opendialog(){
    this.dialogRef.open(PopupComponent) }

}
