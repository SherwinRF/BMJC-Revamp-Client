import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartmentsRoutingModule } from "./departments-routing.module";
import { DepartmentsComponent } from "./departments/departments.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [DepartmentsComponent],
  imports: [CommonModule, DepartmentsRoutingModule, HttpClientModule],
})
export class DepartmentsModule {}
