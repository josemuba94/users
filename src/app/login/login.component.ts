import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username: string = '' ;
  password: string = '' ;
  showErrorMessage: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  login(): void {
    this.userService.getAdminUser().subscribe(user => {
      if(user.username == this.username && user.password == this.password) {
        this.showErrorMessage = false;
        this.userService.loggedUser = user;
        this.router.navigate(['home']);
      } else {
        this.showErrorMessage = true;
      }
    });

  }

}
