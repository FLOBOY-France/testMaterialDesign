import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { isBuffer } from 'util';
import { IUser } from '../../iuser';



@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {

avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4' ];

  public user : IUser;

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) {

  }

  ngOnInit(): void {
  this.user = {id:null, avatar: null, bio: null, birthDate: null, name: null, notes:null};
  
    
  }
 
  save(): void {
    console.log(this.user);
    this.dialogRef.close(this.user);
  }
  cancel(): void {
    this.dialogRef.close(null);
  }
}
