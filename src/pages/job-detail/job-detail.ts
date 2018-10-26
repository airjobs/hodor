import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { JobModel } from '../../models/job-model';
import { Platform } from 'ionic-angular';

declare var evothings: any;

@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html',
})
export class JobDetailPage implements OnInit {

  job: JobModel;
  procurando = false;
  achou = false;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private change: ChangeDetectorRef,
    private platform: Platform,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit(): void {
    this.job = this.navParams.data;
  }

  public cheguei() {
    if (this.platform.is('cordova')) {
      this.escanearSmartLock();
      if(!this.achou) this.exibirAlertPadrao('Ops...', 'Não encontramos a residência do Job por perto.');
    } else {
      this.exibirAlertPadrao('Ops...', 'Este dispositivo não é compatível, certifique-se de estar usando um smartphone com bluetooth habilitado');
    }
  }

  private escanearSmartLock(){
    this.procurando = true;

    let loading = this.loadingCtrl.create({
      content: 'Procurando...'
    });
    loading.present();

    setTimeout(() => {
      evothings.eddystone.startScan(smartLock => {
        //RegraFake: if smartLock.id === job.smartLockId
        if(true) {
          this.achou = true;
          this.exibirAlertPadrao("Você chegou", "A casa foi liberada, pronto para mais um job? :)")
        }
      },
      error => {
        console.log(error);
      }
    )}, 3000)

    evothings.eddystone.stopScan();
    this.procurando = false;
    loading.dismiss();
  }

  private exibirAlertPadrao(titulo: string, descricao: string){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: descricao,
      buttons: ['Ok']
    });
    alert.present();
  }
}
