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

  postInit() {
    this.service.postInit({
      'CLUSTER_SECRET': '5c2defbd5ea3f8806cc0aee8cf005219271a30d1be8b3312434fb814f9f9b768',
    }).subscribe((data: IpfsResponse) => {
      console.log(data);
      if (data.Code === 0) {
        hosts = localStorage.getItem('hosts');
        console.log(hosts);
        jsonHost = JSON.parse(hosts);
        jsonHost[this.form.Host] = this.form;
        localStorage.setItem('hosts', jsonHost.toJSON());
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
