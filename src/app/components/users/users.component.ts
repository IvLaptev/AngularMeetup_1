import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  user: User;
  users: Array<User>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = new User;
    this.getUsers();
  }

  public getUsers() {
    this.userService.getUsers().subscribe((data: Array<User>) => this.users = data);
  }

  public addUser(user: User) {
    if (user.email && user.password && user.username) {
      this.userService.addUser(user).subscribe(() => {
        this.getUsers();
      })
    }
  }
}
