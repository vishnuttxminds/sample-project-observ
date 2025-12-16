import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsiteUserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  private orgUsersSubject = new BehaviorSubject<any[]>([]);
  orgUsers$ = this.orgUsersSubject.asObservable();

  setUsers(users: any[]) {
    this.usersSubject.next(users);
    this.filterOrgUsers(users);
  }

  getUsers() {
    return this.usersSubject.getValue();
  }

  private filterOrgUsers(users: any[]) {
    const filtered = users.filter((user) => user.website?.endsWith('.org'));
    this.orgUsersSubject.next(filtered);
  }
}
