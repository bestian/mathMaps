import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyMapInnerComponent } from '../../components/my-map-inner/my-map-inner';


@Component({
  selector: 'page-home',
  templateUrl: 'elementary.html'
})


export class ElementaryPage {

  constructor(public navCtrl: NavController) {
  }

}
