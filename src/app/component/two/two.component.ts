import { Component, OnInit } from '@angular/core';
import { UsernameService } from 'src/app/service/username.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  username!: string;
  constructor(private _userService: UsernameService) {}

  ngOnInit(): void {
    this._userService.userNameSubObj$.subscribe((data) => {
      this.username = data;
    });
  }
}
