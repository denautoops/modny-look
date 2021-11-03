import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: [NgbCarouselConfig]
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  mobile: boolean;

  images = ["./assets/img/brand/very.png", "./assets/img/brand/bershka.png", "./assets/img/brand/hm.png", "./assets/img/brand/only.svg", "./assets/img/brand/vero-moda.png"]

    ngOnInit() {
      if (window.screen.width === 360) { // 768px portrait
          this.mobile = true;
      }
  }

  /*
  ./assets/img/brand/very.png
./assets/img/brand/bershka.png
./assets/img/brand/hm.png
./assets/img/brand/only.svg
./assets/img/brand/vero-moda.png
   */


    constructor() {
    }

}
