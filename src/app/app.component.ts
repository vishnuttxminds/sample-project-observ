import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './service/api-service.service';
import { WebsiteUserService } from './services/website-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sample-app-obs';
  users: any[] = [];

  orgUsers$ = this.websiteUserService.orgUsers$;
  constructor(
    private apiService: ApiServiceService,
    private websiteUserService: WebsiteUserService
  ) {}
  ngOnInit(): void {
    this.getDetails();
    this.websiteUserService.getDetails();
  }

  getDetails() {
    this.apiService.getDetails().subscribe({
      next: (res: any) => {
        // console.log('API success:', res);
        this.users = Array.isArray(res) ? res : [res];
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
