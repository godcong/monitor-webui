import {Component, Host, OnInit} from '@angular/core';
import {ClusterService} from '../cluster.service';

interface InitForm {
  Host: string;
  Port: int;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  service: ClusterService;
  form: InitForm = {
    Host: '',
    Port: 7758,
  };

  host() {
    if (this.form.Host !== '') {
      return `http://${this.form.Host}:${this.form.Port}`;
    }
    return `http://localhost:${this.form.Port}`;
  }

  getHosts() {
    const hosts = localStorage.getItem('hosts');
    const jsonHost = JSON.parse(hosts);
  }

  postInit() {
    let localHost = [];
    this.service.postInit(this.host(), {
      'CLUSTER_SECRET': '5c2defbd5ea3f8806cc0aee8cf005219271a30d1be8b3312434fb814f9f9b768',
    }).subscribe((data: IpfsResponse) => {
      console.log(data);
      // if (data.Code === 0) {
      // let hosts: InitForm[];
      const hosts = localStorage.getItem('hosts');
      console.log(hosts);
      const key = this.form.Host === '' ? 'localhost' : this.form.Host;

      if (hosts === null || hosts === '') {
        localHost[key] = this.form;
        console.log(localHost);
        localStorage.setItem('hosts', JSON.stringify(localHost));

      } else {
        localHost = JSON.parse(hosts);
        localHost[key] = this.form;
        console.log(localHost);
        localStorage.setItem('hosts', JSON.stringify(localHost));
      }

      history.go(-1);
    });
  }

  getInit() {
    this.service.requestInit()
      .subscribe((data: IpfsResponse) => {
        console.log(data);
      });
  }

  constructor(service: ClusterService) {
    console.log('const');
    this.service = service;
  }

  ngOnInit() {
    // this.form.Host = '';
  }

}
