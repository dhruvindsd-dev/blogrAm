import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  transparent: boolean = true;
  isAuthenticated: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((responseData) => {
      this.isAuthenticated = !!responseData;
    });
  }

  onScroll(navbar) {
    if (window.pageYOffset > 100 && this.transparent) {
      // fixed top
      navbar.style.borderBottom = '1px solid black';
      navbar.classList.remove('is-spaced');
      this.transparent = false;
      navbar.style.backgroundColor = '';
    }
    if (window.pageYOffset < 50 && !this.transparent) {
      // not fixed top
      navbar.style.borderBottom = '0px';
      navbar.classList.add('is-spaced');
      this.transparent = true;
      navbar.style.backgroundColor = 'transparent';
    }
  }
}
