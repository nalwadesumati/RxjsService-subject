import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  private userNameSubject$ = new Subject<string>();
  public userNameSubObj$: Observable<string> =
    this.userNameSubject$.asObservable();
  constructor() {}

  setUserName(value: string) {
    this.userNameSubject$.next(value);
  }
}
