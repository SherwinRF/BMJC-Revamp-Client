import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UniversityDetailsComponent } from "./university-details/university-details.component";
import { UniversityChancellorsComponent } from "./university-chancellors/university-chancellors.component";
import { UniversityRegistrarComponent } from "./university-registrar/university-registrar.component";

@NgModule({
  declarations: [
    UniversityDetailsComponent,
    UniversityChancellorsComponent,
    UniversityRegistrarComponent,
  ],
  imports: [CommonModule],
  exports: [
    UniversityDetailsComponent,
    UniversityChancellorsComponent,
    UniversityRegistrarComponent,
  ],
})
export class UniversityModule {}
