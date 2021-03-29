import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.user = this.userService.loggedUser;
  }

  logout() {
    this.userService.loggedUser = new User();
    this.router.navigate(['login']);
  }

}
