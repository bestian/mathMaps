import { Component } from '@angular/core';

import { IntroPage } from '../intro/intro';
import { ElementaryPage } from '../elementary/elementary';
import { JoniorPage } from '../junior/junior';
import { SeniorPage } from '../senior/senior';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab0Root: any = IntroPage;
  tab1Root: any = ElementaryPage;
  tab2Root: any = JoniorPage;
  tab3Root: any = SeniorPage;

  constructor() {

  }
}
