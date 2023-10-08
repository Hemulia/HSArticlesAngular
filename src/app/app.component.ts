import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { RefreshStatusService } from './refresh-status/refresh-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private refreshStatusService: RefreshStatusService) {}

  ngOnInit(): void {
    // Attach an event listener to the beforeunload event
    window.addEventListener('beforeunload', async (event) => {
      event.preventDefault(); // Prevent the default behavior (page unload)

      try {
        // Send a POST request to trigger the backend's refresh endpoint
        await this.sendRefreshRequest();
        console.log('Refresh request sent successfully.');
        this.refreshStatusService.setRefreshRequestSent(true); // Set the flag to true after successful refresh request
      } catch (error) {
        console.error('Error sending refresh request:', error);
      }

      // After a successful refresh, you can refresh the page
      window.location.reload();
    });
  }

  // Function to send a refresh request to the backend
  async sendRefreshRequest() {
    try {
      // Send a POST request to trigger the backend's refresh endpoint
      await this.http.post('http://localhost:8080/articles/refresh-articles', {}).toPromise();
    } catch (error) {
      throw new Error('Error sending refresh request: ' + error);
    }
  }
}