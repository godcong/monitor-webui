import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface IpfsResponse {
  Code: number;
  Message: string;
  Detail: [];
}

export interface Encoder {
  encode();
}

@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  http: HttpClient;

  // hosts: [];

  getHosts() {
    const hosts = localStorage.getItem('hosts');
    console.log(hosts);
    if (hosts === null || hosts === '') {
      return [];
    }
    return JSON.parse(hosts);
  }

  addToHost(key: string, data: Encoder) {
    let hosts = this.getHosts();
    const encoded = data.encode();
    console.log('name', key);

    hosts = hosts.filter(function (v: any) {
      return v['name'] !== key;
    });

    if (hosts === null) {
      hosts = [{
        name: key,
        data: encoded,
      }];
    } else if (hosts === []) {
      hosts = [{
        name: key,
        data: encoded,
      }];
    } else {
      hosts.push({
        name: key,
        data: encoded,
      });
    }


    console.log(hosts, JSON.stringify(hosts));
    localStorage.setItem('hosts', JSON.stringify(hosts));
  }


  requestInit() {
    return this.http.get('http://localhost:7758/v0/heartbeat');
  }

  postInit(host: string, postBody: any) {
    return this.http.post(host + '/v0/init', postBody, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  constructor(http: HttpClient) {
    this.http = http;
  }
}
