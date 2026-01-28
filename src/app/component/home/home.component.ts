import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { of } from 'rxjs/internal/observable/of';
import { Subscription } from 'rxjs/internal/Subscription';
import { OfService } from 'src/app/service/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _ofService: OfService) {}
  intervalSub!: Subscription;
  sports$ = of([
    'cricket',
    'badminton',
    'cycling',
    'chess',
    'uno',
    'running',
    'hollyball',
    'Kho-Kho',
    'kabddi',
    'bikeRiding',
  ]);
  skills$ = of([
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'RxJS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
  ]);
  colors$ = of([
    'yellow',
    'white',
    'red',
    'pink',
    'blue',
    'green',
    'orange',
    'lightblue',
  ]);
  product$ = of([
    'Laptop',
    'Mobile Phone',
    'Smart Watch',
    'Keyboard',
    'Camera',
    'USB Cable',
    'Headphones',
  ]);

  books$ = of([
    'mrutunjay',
    'panipat',
    'radhey',
    'yayati',
    'shrimanYogi',
    'chyawa',
  ]);
  names$: string[] = [
    'Sumati',
    'Snehal',
    'Rushikesh',
    'Punam',
    'Sanjay',
    'Sunita',
  ];
  ngOnInit(): void {
    // this._ofService.of$.subscribe({
    //   next: (num) => {
    //     if (num % 2 === 0) {
    //       console.log(num);
    //     }
    //   },
    // });

    // this.intervalSub = interval(1000).subscribe((num: number) => {
    //   console.log(num);
    // });

    this._ofService.skills$.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ofService.colors$.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ofService.books$.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._ofService.product$.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
/// this._ofservice.skills$.pipe(tap((s) => console.log(s))).subscribe();
