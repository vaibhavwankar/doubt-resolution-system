import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    //console.log(form);
    this.userService.login(form.value.id,form.value.password).subscribe(data=>{
      //console.log(data)
      if(data){
        this.router.navigate(['home']);
      }else{
        this.dialog.open(DialogElementsExampleDialog);
      }
    })
  }

  close(){
    this.dialog.closeAll();
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogElementsExampleDialog {}
