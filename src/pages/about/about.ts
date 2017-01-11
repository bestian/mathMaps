import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  private taps = [0,0,0,0,0,0];
  private dirHs = [0,0,0,0,0,0];
  private dirVs = [0,0,0,0,0,0];
  private isStrong = false;
  private strongCenter = {x:0, y:0};
  private myTop: number;
  private myLeft: number;


  circleTapEvent(e) {
    this.isStrong = false;
  }

  tapEvent(e, n) {
    this.isStrong = false;
    this.taps[n]++;
    this.taps[n] = this.taps[n] % 2;
    if(this.taps[n] == 0) {
      this.dirHs[n] = 0
    }
  }

  swipeEvent(e, n) {
    //console.log(e)
    if (e.direction == 2 && this.dirHs[n] > -1) {
        //direction 2 = right to left swipe.
      this.dirHs[n]--;
    }
    if (e.direction == 4 && this.dirHs[n] < 2) {
        //direction 4 = left to right swipe.
      this.dirHs[n]++;
    }
  }

  pressEvent(e,n) {
    this.isStrong = true;
    this.myTop = e.center.y - 600;
    this.myLeft = e.center.x - 600;
    //...
  }

}
