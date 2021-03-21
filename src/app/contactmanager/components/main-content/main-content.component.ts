import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../iuser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public user: IUser;
  constructor(private route: ActivatedRoute, private service: UserService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.user = null;
      if (!id)
        id = 1;
      this.service.users.subscribe(users => {
        if (users.length != 0) {

            this.user = this.service.userById(id);
            console.log(this.user);

    

        }

      });

    })
  }

}
