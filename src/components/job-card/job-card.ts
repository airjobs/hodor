import { Component } from '@angular/core';

@Component({
  selector: 'job-card',
  templateUrl: 'job-card.html'
})
export class JobCardComponent {

  text: string;

  constructor() {
    console.log('Hello JobCardComponent Component');
    this.text = 'Hello World';
  }

}
