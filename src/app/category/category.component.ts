import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup,FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';


// type NewType = NewType;

// type NewType = ResetForm;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  title='dsh1';
  signupform: FormGroup;
  firstname!: string;
  lastname!: string;
  email!: string;
  userpassword!: string;
  data:any;
  submitted:false;


  // formBuilder: any;
  // formBuilder: any;
  constructor(private formbuilder:FormBuilder,private router:Router,private dialogRef:MatDialog){


    this.signupform= formbuilder.group({
      fname:['',Validators.required],
      emailid:['',Validators.required],
      // userpassword:['',Validators.required]



    })
  }

  
  // formBuilder: any;
  // public contactForm: FormGroup = this.formBuilder.group({
    
  // });
  


  ngOnInit(): void {
    this.formbuilder
  }
  buttonclick() {
    this.router.navigate(['/categoriesreport']);
    // alert("you have successfully logged out!")
  }
  PostData(){
  
    this.firstname=this.signupform.get('fname').value;
    this.email=this.signupform.get('emailid').value;
    this.resetForm();

    console.log(this.firstname);
    console.log(this.email);
    console.log(this.signupform.value)
  }
 
   resetForm(){
    this.signupform.reset({
      fname:"",
      emailid:""

    });
  }
  opendialog(){
    this.dialogRef.open(PopupComponent) }
  


  
  

}
