import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdmissionsRoutingModule } from "./admissions-routing.module";
import { UgStudentsComponent } from "./ug-students/ug-students.component";
import { PgStudentsComponent } from "./pg-students/pg-students.component";
import { AdmissionsService } from "./admissions.service";
import { HttpClientModule } from "@angular/common/http";
import { GoogleChartsModule } from "angular-google-charts";
import { LoadingModule } from "../../loading-module/loading/loading.module";

@NgModule({
  declarations: [UgStudentsComponent, PgStudentsComponent],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    LoadingModule,
  ],
  providers: [AdmissionsService],
})
export class AdmissionsModule {}
