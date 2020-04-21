import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/merchant/Inbox',
      icon: 'mail'
    },
    {
      title: 'Dashboard',
      url: '/merchant/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Merchants',
      url: '/merchant/add',
      icon: 'heart'
    },
    {
      title: 'Products',
      url: '/merchant/Archived',
      icon: 'archive'
    },
    {
      title: 'Orders',
      url: '/merchant/Trash',
      icon: 'trash'
    },
    {
      title: 'Campaigns',
      url: '/merchant/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('merchant/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
