import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-ordersreport',
  templateUrl: './ordersreport.component.html',
  styleUrls: ['./ordersreport.component.scss']
})
export class OrdersreportComponent implements OnInit {
  usersArray=[
    {
      "id":1,
      // "code":"M10001gg",
      "Customername":"Prasad",
      "Mobile":"7865567849",
      "TotalAmount":"581",
      "Date":"11 Dec 2021 02:28PM",
      "isEdit":false

    },
    {
      "id":2,
      // "code":"M10002",
      "Customername":"Kaushal Kishore",
      "Mobile":"8978645367",
      "TotalAmount":"10,000",
      "Date":"11 Dec 2021 02:30pm",
      "isEdit":false
    },
    {
      "id":3,
      // "code":"M10003",
      "Customername":"Amit Kumar",
      "Mobile":"8978674367",
      "TotalAmount":"20,000",
      "Date":"11 Dec 2021 04:36pm",
      "isEdit":false

    },
    {
      "id":4,
      // "code":"M10004",
      "Customername":"Jay kumar",
      "Mobile":"8978785367",
      "TotalAmount":"1000",
      "Date":"12 Aug 2021 12:02Am",
      "isEdit":false
    },
    {
      "id":5,
      // "code":"M10005",
      "Customername":"Srija",
      "Mobile":"8988647367",
      "TotalAmount":"1000",
      "Date":"14 Dec 2021 02:30pm",
      "isEdit":false
    },
    {
      "id":6,
      // "code":"M10006",
      "Customername":"Raghav",
      "Mobile":"8978646567",
      "TotalAmount":"40,000",
      "Date":"15 Dec 2021 04:15pm",
      "isEdit":false
    }
  ]
  constructor(private router:Router,private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }
  // buttonClick() {
  //   this.router.navigateByUrl('/category');
  // }
  onEdit(item:any){
    debugger;
   this.usersArray.forEach(element=>{
    element.isEdit = false;



    })
    item.isEdit=true;

  }
  buttonclick() {
    this.router.navigateByUrl('/category');
  }
  ondelete(data:any){
    console.log(data);
    this.usersArray.splice(data,1);
    
  }

  opendialog(){
    this.dialogRef.open(PopupComponent) }
}
