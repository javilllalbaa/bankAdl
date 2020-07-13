import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Data } from './../../mockup/data'
// import data from 'src/app/mockup/data'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  data: any = Data;

  constructor(
    private http: HttpClient
  ) {}

  public getJSON(): Observable<any> {
    return of(Data)
  }

}
