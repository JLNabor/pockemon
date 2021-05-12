import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PockemonInfoService {
  public contador: BehaviorSubject<number> = new BehaviorSubject(0);
  
  constructor() { }

  getProfileObs(): Observable<number> {
    return this.contador.asObservable();
}

setProfileObs(conta: number) {
    this.contador.next(conta);
}
}
