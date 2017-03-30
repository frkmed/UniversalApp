import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabPageHome } from '../pages/tab-page-home/tab-page-home';
import { TabPageSecondary } from '../pages/tab-page-secondary/tab-page-secondary';
import { Tabs } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail-page/detail-page';
import { SettingsPage } from '../pages/settings/settings';
import { AddAppPage } from '../pages/settings/add-app';
import { Btn } from '../components/btn/btn';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    TabPageHome,
    TabPageSecondary,
    Tabs,
    DetailPage,
    SettingsPage,
    AddAppPage,
    Btn
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabPageHome,
    TabPageSecondary,
    Tabs,
    DetailPage,
    SettingsPage,
    AddAppPage,

    Btn
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
