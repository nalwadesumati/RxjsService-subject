import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsernameService } from './service/username.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RxjsTask';

  @ViewChild('userNameForm') userNameForm!: NgForm;
  private _userNameService = inject(UsernameService);
  ngOnInit(): void {}
  onSubmit() {
    if (this.userNameForm.valid) {
      let val = this.userNameForm.value;
      console.log(val);

      this._userNameService.setUserName(val.username);

      this.userNameForm.reset();
    }
  }
}
