import { Component, OnInit } from '@angular/core';
//import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css'] ,
  //providers: [ NgbCarouselConfig ]
})
export class HostsComponent implements OnInit {

  /*constructor(config: NgbCarouselConfig) { 
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  */
  ngOnInit() {
    $(document).ready(function(){
      $('.carousel').carousel();
    });  
    
  }

  
}
