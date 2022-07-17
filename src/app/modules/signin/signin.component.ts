import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  model: any = {}
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin(): void {
    sessionStorage.setItem('loggedinUser', this.model.userName)
    this.router.navigateByUrl('/home')
  }

  signUp(): void {
    this.router.navigateByUrl('/signup')
  }

  continueWithoutSignin(): void {
    this.router.navigateByUrl('/home')
  }
}
