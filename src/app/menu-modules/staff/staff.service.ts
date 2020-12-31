import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StaffService {
  // url="http://localhost:8000/Non-Teaching";
  //url="http://15.207.88.26:8000/Non-Teaching";
  url = "http://localhost:8000/Teachers";
  url2 = "http://localhost:8000/Non-Teaching";
  constructor(private http: HttpClient) {}
  getresult() {
    return this.http.get(this.url);
  }

  getresult2() {
    return this.http.get(this.url2);
  }
}
