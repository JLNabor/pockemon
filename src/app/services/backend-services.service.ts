import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Pockemon } from '../shared/Pockemon';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {
  
  constructor(private http:HttpClient) { }

  public getPockemon():Observable<Pockemon[]>{
    return this.http.get<Pockemon[]>('https://localhost:44351/api/Pockemon');    
  }
  
}
