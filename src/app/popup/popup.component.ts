import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }

  opendialog(){
    this.dialogRef.open(PopupComponent);
  }

  ngOnInit(): void {
  }

}
