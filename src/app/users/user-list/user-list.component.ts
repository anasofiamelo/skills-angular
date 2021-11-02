import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
    ) {}
  
  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id

    this.userService.listFromUser(id).subscribe(users => {this.users = users})
  }
}