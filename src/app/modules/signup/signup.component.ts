import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model: any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.model)
  }

  signin() {
    this.router.navigateByUrl('/signin')
  }

}
