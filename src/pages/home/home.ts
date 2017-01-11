import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  public taps = [0,0,0,0,0,0];
  public dirHs = [0,0,0,0,0,0];
  public dirVs = [0,0,0,0,0,0];

  tapEvent(e, n) {
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
}
