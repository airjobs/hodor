import { JobModel } from './../../models/job-model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'job-card',
  templateUrl: 'job-card.html'
})
export class JobCardComponent {
  @Input('job') job: JobModel;
}
