import { IonicModule } from 'ionic-angular';
import { NgModule } from "@angular/core";
import { JobCardComponent } from "./job-card/job-card";
@NgModule({
  declarations: [JobCardComponent],
  imports: [
    IonicModule.forRoot(JobCardComponent),
  ],
  exports: [JobCardComponent]
})
export class ComponentsModule {}
