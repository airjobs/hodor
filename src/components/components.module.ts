import { NgModule } from '@angular/core';
import { ComponentsJobCardComponent } from './components-job-card/components-job-card';
import { JobCardComponent } from './job-card/job-card';
@NgModule({
	declarations: [ComponentsJobCardComponent,
    JobCardComponent],
	imports: [],
	exports: [ComponentsJobCardComponent,
    JobCardComponent]
})
export class ComponentsModule {}
