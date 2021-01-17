import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrganogramService {
  constructor(private httpclient: HttpClient) {}

  getDynamicStaff(): Observable<any[]> {
    return this.httpclient.get<any[]>("http://35.154.255.25:8000/organogram", {
      responseType: "json",
    });
  }
}
