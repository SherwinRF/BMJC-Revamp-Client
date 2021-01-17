import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Resources from "../../models/resources";

@Injectable({
  providedIn: "root",
})
export class ResourcesService {
  url: string = "http://35.154.255.25:8000/Resources";

  constructor(private http: HttpClient) {}

  getResources(): Observable<Resources[]> {
    return this.http.get<Resources[]>(this.url, { responseType: "json" });
  }
}
