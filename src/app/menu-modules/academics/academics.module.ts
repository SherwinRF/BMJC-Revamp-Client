import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http"; // New Added
import { DataTablesModule } from "angular-datatables"; // New Added

import { AcademicsRoutingModule } from "./academics-routing.module";
import { ActivitiesComponent } from "./activities/activities.component";
import { AwardsAndAchievementsComponent } from "./awards-and-achievements/awards-and-achievements.component";
import { ResearchPublicationsComponent } from "./research-publications/research-publications.component";

@NgModule({
  declarations: [
    ActivitiesComponent,
    AwardsAndAchievementsComponent,
    ResearchPublicationsComponent,
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    HttpClientModule, // New Added
    DataTablesModule, // New Added
  ],
  bootstrap: [
    ActivitiesComponent,
    AwardsAndAchievementsComponent,
    ResearchPublicationsComponent,
  ],
})
export class AcademicsModule {}
