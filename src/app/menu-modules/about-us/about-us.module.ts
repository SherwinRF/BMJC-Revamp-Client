import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutUsRoutingModule } from "./about-us-routing.module";
import { DeansComponent } from "./deans/deans.component";
import { OrganogramComponent } from "./organogram/organogram.component";
import { HistoryComponent } from "./history/history.component";
import { CommitteeComponent } from "./committee/committee.component";
import { UniversityComponent } from "./university/university.component";
import { RecognitionComponent } from "./recognition/recognition.component";
import { RecognitionModule } from "./recognition/recognition.module";
import { UniversityModule } from "./university/university.module";
import { HttpClientModule } from "@angular/common/http";
import { LoadingModule } from "src/app/loading-module/loading/loading.module";
@NgModule({
  declarations: [
    DeansComponent,
    OrganogramComponent,
    HistoryComponent,
    CommitteeComponent,
    UniversityComponent,
    RecognitionComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    RecognitionModule,
    UniversityModule,
    HttpClientModule,
    LoadingModule,
  ],
})
export class AboutUsModule {}
