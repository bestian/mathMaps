import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { IntroPage } from '../pages/intro/intro';
import { ElementaryPage } from '../pages/elementary/elementary';
import { JoniorPage } from '../pages/junior/junior';
import { SeniorPage } from '../pages/senior/senior';

import { TabsPage } from '../pages/tabs/tabs';

import { MyMapInnerComponent } from '../components/my-map-inner/my-map-inner';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    ElementaryPage,
    JoniorPage,
    SeniorPage,
    TabsPage,
    MyMapInnerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    ElementaryPage,
    JoniorPage,
    SeniorPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
