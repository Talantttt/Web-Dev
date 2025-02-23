import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';



@Component({
    selector: 'app-user',
    template:`
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />


    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
        Favorite Framework:
        <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>

      <ul>
        <li>
          Static Image:
          <img ngSrc="assets/favicon.ico" alt="Angular logo" width="32" height="32" />
        </li>
        <li>
          Dynamic Image:
          <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
        </li>
      </ul>
    `,
    imports: [FormsModule, RouterLink, RouterOutlet, NgOptimizedImage],
})


export class UserComponent{
    favoriteFramework = '';
    logoUrl = 'assets/favicon.ico';
    logoAlt = 'Angular logo';
    username = 'youngTech';

    showFramework(){
        alert(this.favoriteFramework);
    }
}