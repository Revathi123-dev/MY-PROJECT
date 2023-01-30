import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.scss']
})
export class MydashboardComponent implements OnInit {
  public myForm:FormGroup;
  // router: any;

  constructor(private router: Router ,formBuilder:FormBuilder) { 
    this.myForm = formBuilder.group({
      mob:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
    

  }
  get m(){
    return this.myForm.controls;
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
  btnClick() {
    this.router.navigateByUrl('/home');
  }
  

  ngOnInit(): void {
    
  }

}

