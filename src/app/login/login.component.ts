import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  loginIcon = faArrowRight;

  constructor(private router: Router, private userService:UserService){

  }

  ngOnInit() {
    this.loginForm= new FormGroup({
      name: new FormControl(''),
    });
  }

  login() {
    this.userService.setUser(this.loginForm.value.name)
    this.router.navigate(['/dashboard'])
  }
}
