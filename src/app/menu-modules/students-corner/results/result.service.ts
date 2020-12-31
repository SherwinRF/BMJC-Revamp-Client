import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Results } from "../../../models/results.model";
@Injectable()
export class ResultService {
  tableElement: string;
  constructor(private http: HttpClient) {}
  getStoredResult(): Observable<Results[]> {
    return this.http.get<Results[]>("http://localhost:8000/Results_Year");
    //return this.http.get<Results[]>("http://13.232.107.115:8000/Results_Year");
  }
  getSeatNumber(seat) {
    return this.http.get<Results[]>("http://localhost:8000/Results/" + seat);
    //return this.http.get("http://13.232.107.115:8000/Results/"+seat);
  }
}
