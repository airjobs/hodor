import { JobModel } from './../../models/job-model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JobsProvider {
  constructor(public http: HttpClient) { }

  list(): Observable<Array<JobModel>> {
    return this.http.get<Array<JobModel>>("/assets/data/jobs.json");
  }
}
