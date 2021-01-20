import { HttpHeaders,  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';

  httpOtions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor( private httpCliente : HttpClient ) {

   }

   public getLivesWithFlag(flag: string): Observable<ResponsePageable>{
     return this.httpCliente.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
   }
}
