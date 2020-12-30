import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UGRecognitionComponent } from "./ugrecognition/ugrecognition.component";
import { PGRecognitionComponent } from "./pgrecognition/pgrecognition.component";

@NgModule({
  declarations: [UGRecognitionComponent, PGRecognitionComponent],
  imports: [CommonModule],
  exports: [UGRecognitionComponent, PGRecognitionComponent],
})
export class RecognitionModule {}
