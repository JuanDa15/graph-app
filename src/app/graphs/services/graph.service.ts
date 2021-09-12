import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/grafica').
              pipe(
                delay(3000),
                map(
                  value => {
                    const labels = Object.keys (value);
                    const data = Object.values (value);

                    return {labels,data};
                  }
                )
              )
  }
}
