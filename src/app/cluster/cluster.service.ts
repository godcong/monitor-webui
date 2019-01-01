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

  postInit(postBody: any) {
    return this.http.post("http://localhost:7758/v0/init", postBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }

  constructor(http: HttpClient) {
    this.http = http;
  }
}
