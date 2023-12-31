import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  @Output() newUserEvent = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  name = '';
  email = '';
  password = '';

  public log = (x: any) => {
    console.log(x);
  };

  public logout = () => {
    const userObs = this.userService.logout();
    userObs.subscribe((user: User) => this.newUserEvent.emit(user));
  };

  public hello = () => {
    const userObs = this.userService.hello();
    userObs.subscribe((user: User) => this.newUserEvent.emit(user));
  };

  public testPost = () => {
    const userObs = this.userService.postHello();
    userObs.subscribe((user: User) => this.newUserEvent.emit(user));
  };

  public register = () => {
    const userObs = this.userService.register(
      this.name,
      this.email,
      this.password
    );
    userObs.subscribe((user: User) => this.newUserEvent.emit(user));
  };

  public getUser = () => {
    const userObs = this.userService
      .getUser()
      .subscribe((user: User) => console.log('user:', user));
  };

  /**
   * login tests:
   * <div class="flex flex-col gap-3">
  <button (click)="hello()" class="btn btn-primary">hello</button>
  <button (click)="logout()" class="btn btn-primary">logout</button>

  <button (click)="getUser()" class="btn btn-primary">getUser</button>
  <button (click)="test()" class="btn btn-primary">test</button>
  <button (click)="testPost()" class="btn btn-primary">testPost</button>
</div>
   */

  public test = () => {
    /*
    24 * 60 * 60 * 1000,
    const userObs = this.userService.register(
      this.name,
      this.email,
      this.password,
    );
    userObs.subscribe((user: User) => this.newUserEvent.emit(user));
    */

    const userObs = this.userService
      .get()
      .subscribe((user: User) => console.log('wda', user));
  };
}
