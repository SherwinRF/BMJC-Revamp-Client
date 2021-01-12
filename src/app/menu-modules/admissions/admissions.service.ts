import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";

@Injectable()
export class AdmissionsService {
  // For charts
  constructor(private http: HttpClient) {}
  getpdfug(): Observable<any> {
    return this.http.get<any>(
      "http://13.232.107.115:8000/files/admissions-ug-admission"
    );
  }
  getpdfpg(): Observable<any> {
    return this.http.get<any>(
      "http://13.232.107.115:8000/files/admissions-pg-admission"
    );
  }
  getchartpg(): Observable<any> {
    return this.http.get<any>("http://13.232.107.115:8000/Results/PG");
  }
  getchartug(): Observable<any> {
    return this.http.get<any>("http://13.232.107.115:8000/Results/UG");
  }
}
