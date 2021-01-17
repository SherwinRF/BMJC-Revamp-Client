import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DepartmentsService {
  constructor(private httpclient: HttpClient) {}
  getData(): Observable<any> {
    return this.httpclient.get("http://35.154.255.25:8000/files/departments");
  }
}
