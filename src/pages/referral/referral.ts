import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-referral',
  templateUrl: 'referral.html',
})
export class ReferralPage {

  activeMenu = 'Referral';
  loader = false;
  localCurrency: string;
  balance: number;
  popup = false;
  popupText = {
    type: '',
    text: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private _data: DataProvider,
    private storage: Storage) {
    this._data.choiceCurrency.subscribe(res => {
      this.localCurrency = res;
    });
  }

  ngOnInit() {
    this.storage.get('balance').then(value => {
      this.balance = value;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralPage');
  }

  showPopup(type, text) {
    this.popupText = {
      type: type,
      text: text
    };
    this.popup = true;
  }

  exitPopup() {
    this.popup = false;
  }

}
