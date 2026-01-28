import { Component, OnInit } from '@angular/core';
import { UsernameService } from 'src/app/service/username.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  username!: string;
  constructor(private _userService: UsernameService) {}

  ngOnInit(): void {
    this._userService.userNameSubObj$.subscribe((data) => {
      this.username = data;
    });
  }
}
