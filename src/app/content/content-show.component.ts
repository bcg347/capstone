import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Content } from './content';

@Component({
  moduleId: module.id,
  selector: 'content-show',
  templateUrl: 'content-show.component.html'
})
export class ContentShowComponent implements OnInit {
  barcode: number;
  routeId: any;

  constructor(
      private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
        params => {
          this.barcode = +params['barcode'];
        }
       
      )
  }
}