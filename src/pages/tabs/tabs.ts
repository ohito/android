import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TransactionPage } from '../transaction/transaction';
import { MutationPage } from '../mutation/mutation';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tab1Root = MutationPage;
  // tab2Root = AboutPage;
  tab2Root = TransactionPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
