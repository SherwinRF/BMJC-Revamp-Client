import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UGResultComponent } from "./ugresult/ugresult.component";
import { PGResultComponent } from "./pgresult/pgresult.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule } from "@angular/forms";
import { ResultService } from "./result.service";
@NgModule({
  declarations: [UGResultComponent, PGResultComponent],
  imports: [CommonModule, DataTablesModule, FormsModule],
  providers: [ResultService],
  exports: [UGResultComponent, PGResultComponent],
})
export class ResultModule {}
