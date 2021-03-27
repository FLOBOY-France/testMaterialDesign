import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleDrawer = new EventEmitter<void>();

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  openAddContactDialog(): void {
    console.log('Click open dialog');
    const dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result)
        this.openSnackBar("Contact added", "Navigate")
        .onAction().subscribe(() =>{
this.router.navigate(['/contactmanager', result.id])
        });
    });
  }
  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
