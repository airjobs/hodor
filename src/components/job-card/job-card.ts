import { JobDetailPage } from './../../pages/job-detail/job-detail';
import { NavController } from 'ionic-angular';
import { JobModel } from './../../models/job-model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'job-card',
  templateUrl: 'job-card.html'
})
export class JobCardComponent {
  @Input('job') job: JobModel;

  constructor(private navController: NavController) {}

  public abriDetalhes(job: JobModel){
    this.navController.push(JobDetailPage, job);
  }
}
