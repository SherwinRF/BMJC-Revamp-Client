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
  register(name1, phno, time, email, date) {
    var obj = {
      name: String,
      phno: String,
      time: String,
      email: String,
      date: String,
    };
    obj.date = date;
    obj.name = name1;
    obj.email = email;
    obj.phno = phno;
    obj.time = time;
    const body = { obj };

    this.http
      .post("http://13.232.107.115:8000/register", body)
      .subscribe((data) => {});
  }
}
