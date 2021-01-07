import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArchivesComponent } from "./archives/archives.component";
import { JournalsComponent } from "./journals/journals.component";
import { VideosAndPptsComponent } from "./videos-and-ppts/videos-and-ppts.component";

const routes: Routes = [
  {
    path: "journals",
    component: JournalsComponent,
  },
  {
    path: "videos-and-ppt",
    component: VideosAndPptsComponent,
  },
  {
    path: "archives",
    component: ArchivesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
