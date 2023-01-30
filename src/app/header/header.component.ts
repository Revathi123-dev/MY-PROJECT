import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>= new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {}
  buttonclick() {
    this.router.navigate(['/logout']);
    alert("redirecting.. to logout")
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
   }
}
