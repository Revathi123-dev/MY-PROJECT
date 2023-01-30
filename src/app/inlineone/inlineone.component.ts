import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-inlineone',
  templateUrl: './inlineone.component.html',
  styleUrls: ['./inlineone.component.scss']
})
export class InlineoneComponent implements OnInit {

  data:any;
  usersArray=[
    {
      "id":1,
      "name":"Surekha",
      "username":"Sureksha.B",
      "email":"Surekha@gmail.com",
      "phone":"6784684784",
      "websites":"Surekha.com",
      "isEdit":false

    },
    {
      "id":2,
      "name":"Renuka",
      "username":"Renuka.C",
      "email":"Renuka@gmail.com",
      "phone":"7357678654",
      "websites":"Renuka.com",
      "isEdit":false
    },
    {
      "id":3,
      "name":"Rahul",
      "username":"Rahul.v",
      "email":"Rahul@gmail.com",
      "phone":"7358754387",
      "websites":"Rahul.com",
      "isEdit":false
    },
    {
      "id":4,
      "name":"Raghav",
      "username":"Raghav.G",
      "email":"Raghav@gmail.com",
      "phone":"7358754387",
      "websites":"Raghav.com",
      "isEdit":false
    },
    {
      "id":5,
      "name":"Raghunath",
      "username":"Raghunath.A",
      "email":"Raghunath@gmail.com",
      "phone":"7358754356",
      "websites":"Raghunath.com",
      "isEdit":false
    },
    {
      "id":6,
      "name":"kiran",
      "username":"kiran.B",
      "email":"kiran@gmail.com",
      "phone":"7358754678",
      "websites":"kiran.com",
      "isEdit":false
    }
  ]

  constructor(private router:Router, private dialogRef:MatDialog) {
  
   }
   buttonclick() {
    this.router.navigate(['/productsreport']);
  }

  ngOnInit(): void {
  }
  onEdit(item:any){
    
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
  


