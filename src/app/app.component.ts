import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'do-connect-ui';
  showMenu = false
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((res: any) => {
      this.showMenu = (res.url !== '/signin' && res.url !== '/signup');
    })
  }
}
