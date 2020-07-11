import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Data } from './../../mockup/data'
// import data from 'src/app/mockup/data'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  data: any = Data;

  constructor(
    private http: HttpClient
  ) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // }); 
  }

  public getJSON(): Observable<any> {
    return this.http.get("src/app/mockup/data.json");
  }

  public getData(){
    console.log("Hola...", this.data)
    return "Hola canciono"
  }

}
