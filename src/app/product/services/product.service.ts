import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public _jsonURL = 'assets/mobile-api.json';

   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
          console.log("service to mobile-api json - constructor")
          console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/mobile-api.json");
    }
}
