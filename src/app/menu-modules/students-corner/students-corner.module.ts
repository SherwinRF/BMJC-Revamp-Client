import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentsCornerRoutingModule } from "./students-corner-routing.module";
import { ResultsComponent } from "./results/results.component";
import { HostelComponent } from "./hostel/hostel.component";
import { ResultModule } from "./results/results.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ResultsComponent, HostelComponent],
  imports: [
    CommonModule,
    StudentsCornerRoutingModule,
    ResultModule,
    HttpClientModule,
  ],
})
export class StudentsCornerModule {}
