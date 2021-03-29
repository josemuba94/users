import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.loggedUser;
  }

  ngOnInit(): void {
    if(!this.user.id)
      this.router.navigate(['login']);
  }

}
