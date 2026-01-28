import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { OfService } from 'src/app/service/of.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  even$ = of([2, 4, 6, 8, 10, 12, 14]);

  oddNo$ = of([31, 41, 61, 81, 101, 121, 141]);

  number$ = of([23, 34, 54, 32, 12, 67, 88, 99, 25, 24]);

  num$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  divisibleby3and5$ = of([1, 2, 3, 4, 4, 5, 7, 8, 9, 10, 15, 45, 25, 60]);

  names$: string[] = [
    'Sumati',
    'Snehal',
    'Rushikesh',
    'Punam',
    'Sanjay',
    'Sunita',
  ];
  constructor(private _ofService: OfService) {}

  ngOnInit(): void {
    this._ofService.even$.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ofService.oddNo$.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ofService.number$.subscribe({
      next: (num) => {
        if (num % 2 === 0) {
          console.log(num);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this.divisibleby3and5$
    //   .pipe(filter((n) => n % 3 === 0 && n % 5 === 0))
    //   .subscribe((res) => console.log(res));

    // this.num$
    //   .pipe(filter((num) => num % 2 === 0))
    //   .subscribe((res) => console.log(res));
  }
}
