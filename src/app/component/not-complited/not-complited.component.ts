import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Itodos } from 'src/app/model/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-not-complited',
  templateUrl: './not-complited.component.html',
  styleUrls: ['./not-complited.component.scss'],
})
export class NotComplitedComponent implements OnInit {
  todosArr: Itodos[] = [];
  todosArrObs$!: Observable<Itodos[]>;
  constructor(private _todoService: TodosService) {}

  ngOnInit(): void {
    this.todosArrObs$ = this._todoService
      .getTodos()
      .pipe(map((data) => data.filter((t) => !t.completed)));
  }
}
