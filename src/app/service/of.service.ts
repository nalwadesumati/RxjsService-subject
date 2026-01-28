import { Injectable } from '@angular/core';
import { filter, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfService {
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

  books$ = of([
    'mrutunjay',
    'panipat',
    'radhey',
    'yayati',
    'shrimanYogi',
    'chyawa',
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
  string$ = of(
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
  );
  oddNo$ = of([31, 41, 61, 81, 101, 121, 141]);
  even$ = of([2, 4, 6, 8, 10, 12, 14]);

  number$ = of(23, 34, 54, 32, 12, 67, 88, 99, 25, 24);
  numbers1$ = of([1, 2, 3, 4, 4, 5, 5, 6, 6, 7]);
  names$: string[] = [
    'Sumati',
    'Snehal',
    'Rushikesh',
    'Punam',
    'Sanjay',
    'Sunita',
  ];
  constructor() {}

  // of$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
  // ofnoDisiable7$ = this.numbers1$.pipe(filter((x) => x % 7 !== 0));
  // ofBetween10And30$ = this.numbers1$.pipe(filter((y) => y >= 10 && y <= 30));
  // ofOddGreaterThanTen$ = this.numbers1$.pipe(filter((num) => num >= 10));

  //  onlyApple$ = this.string$.pipe(filter((a) => a === 'apple'));
  // satrtsWithb$ = this.string$.pipe(filter((b) => b.startsWith('b')));
  // lengthGreaterThan5$ = this.string$.pipe(filter((l) => l.length > 5));
  // containsE$ = this.string$.pipe(filter((str) => str.includes('e')
}
