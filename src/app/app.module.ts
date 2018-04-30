import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TransactionPage } from '../pages/transaction/transaction';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AssetListPage } from '../pages/asset-list/asset-list';
import { AssetInfoPage } from '../pages/asset-info/asset-info';
import { ClaimListPage } from '../pages/claim-list/claim-list';
import { AdvanceListPage } from '../pages/advance-list/advance-list';
import { MutationPage } from '../pages/mutation/mutation';

@NgModule({
  declarations: [
    MyApp,
    TransactionPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AssetListPage,
    AssetInfoPage,
    ClaimListPage,
    AdvanceListPage,
    MutationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AssetListPage,
    AssetInfoPage,
    ClaimListPage,
    AdvanceListPage,
    MutationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
