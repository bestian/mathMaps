import { Component, Input} from '@angular/core';

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
  @Input('focus') school = '%E5%B0%8F%E5%AD%B8%E6%95%B8%E5%AD%B8%E5%9C%B0%E5%9C%96';
  
  private dataDir = 'http://math.alearn.org.tw/%E5%AD%B8%E7%BF%92%E5%9C%B0%E5%9C%96/';

  constructor() {
    console.log('Hello MyMapInner Component');
  }

  private taps = [0,0,0,0,0,0];
  private dirHs = [0,0,0,0,0,0];
  private dirVs = [0,0,0,0,0,0];
  private isStrong = false;
  private strongCenter = {x:0, y:0};
  private myTop: number;
  private myLeft: number;
  private topicTitles = ['說明',0,0,0,0,0,0];


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
