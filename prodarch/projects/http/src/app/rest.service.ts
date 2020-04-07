import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class RestService {
  private readonly getOneUrl = "https://reqres.in/api/users/2";

  constructor(private http: HttpClient) {}

  getOne() : Observable<Object>{
   return this.http.get(this.getOneUrl)
  }

  getMany(){
    return this.http.get(`https://reqres.in/api/users?page=2`)
  }

  createUser(data : Date){
    return this.http.post(`https://reqres.in/api/users?page=2`,data,{
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    })
  }

}
