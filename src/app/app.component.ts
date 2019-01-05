import { Component } from '@angular/core';

import { Location, PlatformLocation } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private location: Location, private platformlocation: PlatformLocation){}


interval: any = setInterval(()=>{
  var url_param = this.platformlocation.pathname
  if (url_param === '/overview'){
    console.log(this.platformlocation.pathname)
  }
  
  
}, 1000)

}
