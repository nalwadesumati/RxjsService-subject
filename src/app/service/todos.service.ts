import { Injectable } from '@angular/core';
import { Itodos } from '../model/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  BASE_URL: string = environment.BASE_URL;
  TODOS_URL: string = `${this.BASE_URL}/todos`;
  constructor(private _HttpClient: HttpClient) {}

  getTodos(): Observable<Itodos[]> {
    return this._HttpClient
      .get<Itodos[]>(this.TODOS_URL)
      .pipe(tap((t) => console.log(t)));
  }
}
