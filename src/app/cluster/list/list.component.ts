import {Component, OnInit} from '@angular/core';
import {ClusterService} from '../cluster.service';
import {HttpResponse} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  service: ClusterService;
  clusterList: any[];

  constructor(service: ClusterService) {
    this.service = service;
    this.clusterList = this.getHostList();
  }

  getHostList() {
    const hosts = this.service.getHosts();
    const list = [];

    hosts.forEach(function (v: any) {
      console.log(v);
      list.push(v);
    });
    return list;
  }

  getInit() {
    this.service.requestInit()
      .subscribe((data: []) => {
        console.log(data['detail']);
      });
  }

  ngOnInit() {
  }

}
