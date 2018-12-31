import {Component, OnInit} from '@angular/core';
import {ClusterService} from "../cluster.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  service: ClusterService;

  constructor(service: ClusterService) {
    this.service = service;
  }

  getInit() {
    let data: any;
    this.service.requestInit()
      .subscribe((v1: []) => {
        // if (v1.body != null) {
        console.log(v1["detail"]);
        // }
      });

  }

  ngOnInit() {
  }

}
