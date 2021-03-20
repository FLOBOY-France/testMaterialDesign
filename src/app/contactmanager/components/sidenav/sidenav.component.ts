import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../../iuser';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public showFiller = false;
  public isScreenSmall: boolean;
  users: Observable<IUser[]>;
  public usersList: IUser[];
  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService, private router: Router) { }

  @ViewChild(MatDrawer) drawer: MatDrawer;

  ngOnInit(): void {
    this.breakpointObserver.observe(
      [
        `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
      ]
    ).subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
    })

    this.users = this.userService.users;
    this.userService.loadAll();


    this.router.events.subscribe(() => {
      if (this.isScreenSmall)
        this.drawer.close();
    })

  }

}
