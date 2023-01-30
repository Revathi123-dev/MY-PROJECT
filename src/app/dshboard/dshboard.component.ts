import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dshboard',
  templateUrl: './dshboard.component.html',
  styleUrls: ['./dshboard.component.scss']
})
export class DshboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  buttonclick() {
    this.router.navigate(['/mydashboard']);
    alert("redirecting.. to Start Sell")
  }
  buttonclick1() {
    this.router.navigate(['/home']);
    alert("redirecting.. to Customer & Order details")
  }
  buttonclick2() {
    this.router.navigate(['/companyreport']);
    alert("redirecting.. to Customer Details")

  }
  buttonclick3() {
    this.router.navigate(['/inlineone']);
    alert("redirecting.. to Product report")

  }
  buttonclick4() {
    this.router.navigate(['/productsreport']);
    alert("redirecting.. to Companies report ")

  }
  buttonclick5() {
    this.router.navigate(['/Allcompaniesreport']);
    alert("redirecting.. to Orders report")

  }
  buttonclick6() {
    this.router.navigate(['/ordersreport']);
    alert("redirecting.. to Adding product")

  }
  buttonclick7() {
    this.router.navigate(['/category']);
    alert("redirecting.. to Adding New category")

  }
  buttonclick8() {
    this.router.navigate(['/categoryreport']);
    alert("redirecting.. to Categories report")

  }
  buttonclick9() {
    this.router.navigate(['/logout']);
    alert("redirecting.. to log out!")

  }
 
}
