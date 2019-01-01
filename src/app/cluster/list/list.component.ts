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
    this.service.requestInit()
      .subscribe((data: []) => {
        console.log(data["detail"]);
      });
  }

  postInit() {
    this.service.postInit({
      "CLUSTER_SECRET": "5c2defbd5ea3f8806cc0aee8cf005219271a30d1be8b3312434fb814f9f9b768",
    }).subscribe((data: any) => {
      console.log(data)
    })
  }


  ngOnInit() {
  }

}
