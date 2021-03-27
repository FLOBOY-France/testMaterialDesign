import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUser(user: IUser) : Promise<IUser>{
    
    return new Promise((resolver, reject) =>{
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      resolver(user);
    });
  }
  userById(id: number): IUser {
    return this.dataStore.users.find(x => x.id == id);
  }

  private _users: BehaviorSubject<IUser[]>;

  private dataStore: { users: IUser[]; }


  constructor(private http: HttpClient) {
    this.dataStore = { users: [] }
    this._users = new BehaviorSubject<IUser[]>([]);
  }

  get users(): Observable<IUser[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<IUser[]>(usersUrl)
      .subscribe(
        data => {
          this.dataStore.users = data;
          this._users.next(Object.assign({}, this.dataStore).users);
        },
        error => {
          console.log('Pas de data !');
        }
      );
  }
}
