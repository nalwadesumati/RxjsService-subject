import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Itodos } from 'src/app/model/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todosArr: Itodos[] = [];
  todosArrObs$!: Observable<Itodos[]>;
  constructor(private _todoService: TodosService) {}

  ngOnInit(): void {
    // this._todoService.getTodos().subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.todosArr = data.filter((t) => t.completed);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    this.todosArrObs$ = this._todoService
      .getTodos()
      .pipe(map((data) => data.filter((t) => t.completed)));

    // this.todosArrObs$ = this._todoService
    //   .getTodos()
    //   .pipe(map((data) => data.filter((t) => !t.completed)));
  }
}
