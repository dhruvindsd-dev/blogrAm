import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  transparent: boolean = true;
  constructor() {}

  ngOnInit(): void {}

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
