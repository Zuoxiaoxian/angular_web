import { Component, OnInit } from '@angular/core';


import { Router } from "@angular/router";

import { Location } from "@angular/common";

import { from } from 'rxjs';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }
  title = 'XXX系统';

  ngOnInit() {
  }

  // 返回界面首页
  gotoindex(){
    // this.router.navigate(['/overview'])
    this.location.back()
  }
}
