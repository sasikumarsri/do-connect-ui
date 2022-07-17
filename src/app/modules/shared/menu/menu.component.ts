import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userName = '';
  loggedIn = false;
  constructor(private router: Router) { }

  signout(): void {
    sessionStorage.clear();
    this.userName = 'Guest';
    this.loggedIn = false
  }

  signin(): void {
    this.router.navigateByUrl('/signin')
  }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('loggedinUser') || '';
    this.loggedIn = this.userName !== '';
  }

}
