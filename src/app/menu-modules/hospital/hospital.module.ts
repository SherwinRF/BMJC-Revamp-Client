import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HospitalRoutingModule } from "./hospital-routing.module";
import { HospitalComponent } from "./hospital/hospital.component";
import { GoogleChartsModule } from "angular-google-charts";

@NgModule({
  declarations: [HospitalComponent],
  imports: [CommonModule, HospitalRoutingModule, GoogleChartsModule],
})
export class HospitalModule {}
