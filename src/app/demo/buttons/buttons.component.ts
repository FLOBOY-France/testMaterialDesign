import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `<mat-checkbox>Check me!</mat-checkbox>

  <button mat-button>
      <mat-icon>face</mat-icon>
      Clique !!!
  </button>`,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
