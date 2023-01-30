import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-allcompaniesreport',
  templateUrl: './allcompaniesreport.component.html',
  styleUrls: ['./allcompaniesreport.component.scss']
})
export class AllcompaniesreportComponent implements OnInit {

  usersArray=[
    {
      "id":1,
      // "code":"M10001gg",
      "name":"Parle",
      "Description":"Parle Company",
      // "cost":"2",
      // "websites":"surekha.com",
      "isEdit":false

    },
    {
      "id":2,
      // "code":"M10002",
      "name":"Britania",
      "Description":"Britania Company",
      // "cost":"1.50",
      // "websites":"renuka.com",
      "isEdit":false
    },
    {
      "id":3,
      // "code":"M10003",
      "name":"HUL",
      "Description":"Hindustan Unilever Limited",
      // "cost":"1.50",
      // "websites":"rahul.com",
      "isEdit":false
    },
    {
      "id":4,
      // "code":"M10004",
      "name":"Godrej Beverages and Foods Limited",
      "Description":"Food neccessities and other things",
      // "cost":"1",
      // "websites":"raghav.com",
      "isEdit":false
    },
    {
      "id":5,
      // "code":"M10005",
      "name":"Haldiram Namkeen",
      "Description":"Namkeen",
      // "cost":"10",
      // "websites":"raghunath.com",
      "isEdit":false
    },
    {
      "id":6,
      // "code":"M10006",
      "name":"Kissan",
      "Description":"Jam",
      // "cost":"10",
      // "websites":"kiran.com",
      "isEdit":false
    }
  ]

  constructor(private router:Router,private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }
  buttonclick() {
    this.router.navigate(['/ordersreport']);
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




