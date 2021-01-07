import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResourcesRoutingModule } from "./resources-routing.module";
import { JournalsComponent } from "./journals/journals.component";
import { VideosAndPptsComponent } from "./videos-and-ppts/videos-and-ppts.component";
import { ArchivesComponent } from "./archives/archives.component";
import { ResourcesService } from "./resources.service";
import { HttpClientModule } from "@angular/common/http";
import { LoadingModule } from "src/app/loading-module/loading/loading.module";

@NgModule({
  declarations: [JournalsComponent, VideosAndPptsComponent, ArchivesComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    HttpClientModule,
    LoadingModule,
  ],
  providers: [ResourcesService],
})
export class ResourcesModule {}
