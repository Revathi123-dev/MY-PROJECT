import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

// import { NgxPrintModule } from 'ngx-print/lib/ngx-print.module';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // [x: string]: any;
  // [x: string]: any;
  userForm : FormGroup;
  listData :any;
  print: any;
  
  
  // formbuilder: any;
  // router: any;
 

  constructor(private fb:FormBuilder,  private router: Router, private dialogRef:MatDialog) {
    this.listData = [];
    this.userForm = this.fb.group ({
      name:['',Validators.required],
      address:['',Validators.required],
      contactNo:['',Validators.required],
      gender:['',Validators.required],
     
      
    })
  //   public triggerPrint(): void {   
  //     this.name.nativeElement.click();
  // }
    
   }
//    public triggerPrint(): void {   
//     this.userForm;
// }


   public addItem() : void{
             this.listData.push(this.userForm.value);
            //  this.userForm.reset();

   }
    reset(){
      this.userForm.reset();
    }
   

    removeItem(element:any){
      this.listData.forEach((value:any,index:any)=>{
        if(value == element)
        this.listData.splice(index,1);
      
      });

    }
    buttonclick() {
      this.router.navigate(['/companyreport']);
    }
    // ondelete(data:any){
    //   console.log(data);
    //   this.userForm.splice(data,1);
      
    // }
    // editItem(item:any){
    //   this.listData.forEach(element=>{
    //     element.isEdit=false;
    //   })
    //   item.isEdit=true;
    // }
    
//   opendialog(){
//     this.dialogRef.open(PopupComponent) }
// }

  ngOnInit(): void {
  }
  opendialog(){
    this.dialogRef.open(PopupComponent) }
    // ondelete(data:any){
    //   console.log(data);
    //   this.userForm.splice(data,1);
      
    // }
    
}
 




