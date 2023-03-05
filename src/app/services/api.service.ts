import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get<any>('assets/employees.json')
    .pipe(
      map((answer) => answer.data)
    );
  }
}
