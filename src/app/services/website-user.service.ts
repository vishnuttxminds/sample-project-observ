import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiServiceService } from '../service/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class WebsiteUserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  private orgUsersSubject = new BehaviorSubject<any[]>([]);
  orgUsers$ = this.orgUsersSubject.asObservable();

  constructor(private apiService: ApiServiceService) {}

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

  getDetails() {
    this.apiService.getDetails().subscribe({
      next: (res: any) => {
        // console.log('API success:', res);
        this.setUsers(res);
      },
      error: (err) => {
        console.error('API error:', err);
      },
      complete: () => {
        console.log('API request completed');
      },
    });
  }
}
