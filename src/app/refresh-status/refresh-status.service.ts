import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RefreshStatusService {
  private refreshRequestSent = false;

  setRefreshRequestSent(status: boolean) {
    this.refreshRequestSent = status;
  }

  isRefreshRequestSent() {
    return this.refreshRequestSent;
  }
}
