import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
// providedIn: 'root'
export class HomeService {
  url = "http://13.232.107.115:8000/files/home";
  url2 = "http://13.232.107.115:8000/files/home-newsandevents";

  constructor(private http: HttpClient) {}
  getLinks() {
    return this.http.get(this.url);
  }
  getLinks2() {
    return this.http.get(this.url2);
  }
}
