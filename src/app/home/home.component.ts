import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: {} | undefined;
  studentAccount = false;
  taAccount = false;
  teacherAccount = false;
  routerOutlet = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data;
      this.routerOutlet = true;
      if (data.accountType === 'STUDENT') {
        this.studentAccount = true;
      } else if (data.accountType === 'TA') {
        this.studentAccount = true;
        this.taAccount = true;
      } else if (data.accountType === 'TEACHERS') {
        this.studentAccount = true;
        this.taAccount = true;
        this.teacherAccount = true;
      }
      //console.log(data);
    })
  }

  logout() {
    this.userService.logout().subscribe(data => {
      this.studentAccount = false;
      this.taAccount = false;
      this.teacherAccount = false;
      this.routerOutlet = false;
      this.userService.logout().subscribe(data => {
        this.user = {};
        this.router.navigate(['login']);
      })
    })
  }

}
