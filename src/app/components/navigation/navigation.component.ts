import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="navbar">
      <span class="navbar-toggle" id="js-navbar-toggle">
        <mat-icon>menu</mat-icon>
      </span>
      <span [routerLink]="['home']" class="logo">
        <mat-icon style="font-size: 3em;">houseboat</mat-icon></span
      >
      <ul class="main-nav" id="js-menu">
        <li>
          <a [routerLink]="['home']" class="nav-links">Home</a>
        </li>
        <li>
          <a [routerLink]="['blog']" class="nav-links">Blog</a>
        </li>
        <li>
          <a href="#" class="nav-links">Contact Us</a>
        </li>
        <li>
          <a  [routerLink]="['login']" class="nav-links">Login</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      .navbar {
        font-size: 18px;
        background-image: linear-gradient(260deg, #2376ae 0%, #159a70 100%);
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 10px;
        color: white;
      }

      .main-nav {
        list-style-type: none;
        display: none;
      }

      .nav-links,
      .logo {
        text-decoration: none;
        font-size: 1em;
        color: rgba(255, 255, 255, 0.7);
      }

      .main-nav li {
        text-align: center;
        margin: 15px auto;
      }

      .logo {
        display: inline-block;
        margin-top: 10px;
        margin-left: 20px;
      }

      .navbar-toggle {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
        font-size: 24px;
      }

      .active {
        display: block;
      }

      @media screen and (min-width: 768px) {
        .navbar {
          display: flex;
          justify-content: space-between;
          padding-bottom: 0;
          height: 70px;
          align-items: center;
        }

        .main-nav {
          display: flex;
          margin-right: 30px;
          flex-direction: row;
          justify-content: flex-end;
        }

        .main-nav li {
          margin: 0;
        }

        .nav-links {
          margin-right: 20px;
        }

        .logo {
          margin-top: 0;
        }

        .navbar-toggle {
          display: none;
        }

        .logo:hover,
        .nav-links:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    `,
  ],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
