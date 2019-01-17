import {Component, Host, OnInit} from '@angular/core';
import {ClusterService, Encoder} from '../cluster.service';

interface InitForm {
  Host: string;
  Port: number;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit, Encoder {
  service: ClusterService;
  form: InitForm = {
    Host: '',
    Port: 7758,
  };
  isClient: boolean;
  needIPFSPath: boolean;

  encode() {
    return {
      host: this.form.Host,
      port: this.form.Port,
    };
  }

  host() {
    if (this.form.Host !== '') {
      return `http://${this.form.Host}:${this.form.Port}`;
    }
    return `http://localhost:${this.form.Port}`;
  }


  postInit() {
    this.service.postInit(this.host(), {
      'CLUSTER_SECRET': '5c2defbd5ea3f8806cc0aee8cf005219271a30d1be8b3312434fb814f9f9b768',
    }).subscribe((data: any) => {
      console.log(data);
      // if (data.Code === 0) {
      // let hosts: InitForm[];
      // const hosts = localStorage.getItem('hosts');
      // console.log(hosts);
      const key = this.form.Host === '' ? 'localhost' : this.form.Host;
      this.service.addToHost(key, this);

      history.go(-1);
    });
  }

  getInit() {
    this.service.requestInit()
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  constructor(service: ClusterService) {
    console.log('const');
    this.isClient = false;
    this.needIPFSPath = false;
    this.form.Host = 'localhost';
    this.service = service;
  }

  ngOnInit() {
    // this.form.Host = '';
  }

  clientHidden() {
    if (this.isClient === true) {
      return 'hidden';
    }
    return '';
  }
}
