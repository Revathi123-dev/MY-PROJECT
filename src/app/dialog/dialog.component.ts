import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog"
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  productForm!: FormGroup;
  actionBtn:string="save"

  freshnessList = ["BrandNew", "Second Hand", "Refurbished"]
  // productForm: FormGroup | undefined;
  constructor(private formBuilder:FormBuilder,private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogref:MatDialogRef<DialogComponent>) { }



//private dialogref:MatDialogRef<DialogComponent>) for entering the details again we need this
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName:['',Validators.required], //for entering values 
      category:['',Validators.required],
      freshness:['',Validators.required],
      price:['',Validators.required],
      comment:['',Validators.required],
      date:['',Validators.required],
      stock:['',Validators.required],
      code:['',Validators.required]
    //  Exprdate:['',Validators.required]
    });

    // console.log(this.editData);
    if(this.editData){
      this.actionBtn="update";
      this.productForm.controls['productName'].setValue(this.editData.productName)
      this.productForm.controls['category'].setValue(this.editData.category)
      this.productForm.controls['freshness'].setValue(this.editData.freshness)
      this.productForm.controls['price'].setValue(this.editData.price)
      this.productForm.controls[' comment'].setValue(this.editData.comment)
      this.productForm.controls['date'].setValue(this.editData.date)
      this.productForm.controls['stock'].setValue(this.editData.stock)
      this.productForm.controls['code'].setValue(this.editData.code)
    }
  }
  
addProduct(){
  if(!this.editData){
    if(this.productForm.valid){ 
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("product added successfully");//if product is added then pop up this message
          this.productForm.reset();//for second entry of json data
          this.dialogref.close('save'); //for saving the data again in json server
        },
        error:()=>{
          alert("Error while adding the product") //i f an product is failed to add pop up this message
        }
  
      })
    // console.log(this.productForm.value);
  }
 
  
}else{
  this.updateProduct()
}
}
updateProduct(){
  this.api.putProduct(this.productForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
    alert("product updated successfully");
    this.productForm.reset();
    this.dialogref.close("update");
    },
    error:(err)=>{
      alert("error while getting record")
    }
  })

}//in update product we need to create api must and should
}
