import { Component } from '@angular/core';

/*
  Generated class for the MyMapInner component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'my-map-inner',
  templateUrl: 'my-map-inner.html'
})
export class MyMapInnerComponent {

  text: string;

  constructor() {
    console.log('Hello MyMapInner Component');
    this.text = 'Hello World';
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
