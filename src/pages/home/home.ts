import { JobsProvider } from './../../providers/jobs/jobs';
import { JobModel } from './../../models/job-model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  jobs: JobModel[] = [];

  constructor(public navCtrl: NavController, private jobService: JobsProvider) { }

  ngOnInit(): void {
    this.jobService.list().subscribe(x => this.jobs = x);
  }
}
