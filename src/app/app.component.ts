import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sample-app-obs';
constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {
    this.getDetails();
  }


  getDetails() {
    this.apiService.getDetails().subscribe({
      next: (res: any) => {
        console.log('API success:', res);
      },
      error: (err) => {
        console.error('API error:', err);
      },
      complete: () => {
        console.log('API request completed');
      }
    });
  }
  
}
