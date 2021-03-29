import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  
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

  updateAdminInfo() {
    this.userService.updateAdminUser(this.user).subscribe(user => {
      this.userService.loggedUser = user;
      this.router.navigate(['home']);
    })
  }

}
