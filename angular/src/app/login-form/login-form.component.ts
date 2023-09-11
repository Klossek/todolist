import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private userService: UserService) {}

  password = '';
  email = '';

  public log = (x: any) => {
    console.log(x);
  };

  public createToken = () => {
    const userObs = this.userService.createToken().subscribe(() => {
      const userObs = this.userService.login(
        'golo.klossek@gmail.com',
        '12345678',
      );
      userObs.subscribe((user: User) => {
        console.log(user);
      });
    });
  };

  public login = () => {
    const userObs = this.userService.login(this.email, this.password);
    userObs.subscribe((user: User) => {
      console.log(user);
    });
  };
}
