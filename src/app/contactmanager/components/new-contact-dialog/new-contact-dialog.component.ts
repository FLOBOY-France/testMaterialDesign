import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../iuser';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {

  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];

  public user: IUser;

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>, private userService: UserService) {

  }
  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return 'You must enter a name';
    //if(this.name.hasError('required'))
    //return 'You must enter a name';
  }

  ngOnInit(): void {
    this.user = { id: null, avatar: null, bio: null, birthDate: null, name: null, notes: null };


  }

  save(): void {
    this.user.name = this.name.value;
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    }
    );
    ;
  }
  cancel(): void {
    this.dialogRef.close(null);
  }
}
