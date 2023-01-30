import { Component,OnInit } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';


@Component({
  selector: 'app-printreceipt',
  templateUrl: './printreceipt.component.html',
  styleUrls: ['./printreceipt.component.scss']
})

export class  PrintreceiptComponent  implements OnInit {
   key: any;
    field: "number";
    command = "mat";
    userData: any[] = [];
    dataa: any[] = [];
    table: any[] = [];
    value: any[];
    total: any;
    total_value: any[] = [];
  service: any;

  constructor(
    // private service: CustomerService,
    public print: NgxPrintModule 
  ) {}
  public config = {
    printMode: "template",
    popupProperties: "window.open",
  };

  ngOnInit(): void { 
    console.log(this.userData)
  }
  
  getUserFormData() {
    this.userData = [];
    let obj = {
      key: this.key,
      field: "number",
      command:"mat",
    }
    this.service.addMaterialReturnNote(obj).subscribe((res: any) => {
      this.dataa = res.data;
      this.userData.push(this.dataa[0]);
      console.log(this.userData)
      console.log(this.dataa)

      this.userData.push(this.table);
      this.table = res.data;
      console.log(this.table);
      this.findsum(this.userData);
      
    });
  }

  findsum(table:any) {
    this.value = this.dataa;
    console.log(this.value);
    this.total = 0;
    for (let j = 0; j <= table.length; j++) {
      this.total += this.value[j].total_value;
      console.log(this.total);
      console.log(this.total_value);
    }
  }
}
