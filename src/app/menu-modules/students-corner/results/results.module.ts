import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UGResultComponent } from "./ugresult/ugresult.component";
import { PGResultComponent } from "./pgresult/pgresult.component";

@NgModule({
  declarations: [UGResultComponent, PGResultComponent],
  imports: [CommonModule],
  exports: [UGResultComponent, PGResultComponent],
})
export class ResultModule {}
