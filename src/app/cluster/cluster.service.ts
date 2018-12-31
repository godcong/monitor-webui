import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  http: HttpClient;

  requestInit() {
    return this.http.get("http://localhost:7758/v0/heartbeat");
  }

  constructor(http: HttpClient) {
    this.http = http;
  }
}
