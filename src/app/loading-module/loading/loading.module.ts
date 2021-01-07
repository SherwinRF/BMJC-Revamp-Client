import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingPageComponent } from "./loading-page/loading-page.component";

@NgModule({
  declarations: [LoadingPageComponent],
  imports: [CommonModule],
  exports: [LoadingPageComponent],
})
export class LoadingModule {}
