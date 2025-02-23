import { Component, inject } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { ReversePipe } from './reverse.pipe';
import {LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';
import {CarService} from './car.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {AppComponent1} from './app.component1';
import {UserComponent} from './user.component';
import {ChildComponent} from './children.component';
import {CommentsComponent} from './comments.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
      <nav>
        <a routerLink="/">Home</a>
        |
        <a routerLink="/user">User</a>
      </nav>
      <router-outlet />

      <h2>Profile Form</h2>
      <p>Name: {{ profileForm.value.name }}</p>
      <p>Email: {{ profileForm.value.email }}</p>

      <form 
        [formGroup]="profileForm"
        (ngSubmit)="handleSubmit()">
        <input type="text" formControlName="name" name="name"/>
        <input type="email" formControlName="email" email="email"/>
        <button type="submit" [disabled]="!profileForm.valid">Submit</button>
      </form>


      <!--<p>{{ carService.getCars() }}</p>-->
      <p>Car Listing: {{display}}</p>

      {{loudMessage | lowercase}}


      <li>Number with "decimal" {{ num | number: "3.2-2" }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
      



      Reverse Machine: {{ word }}

  `,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
})

export class AppComponent {
  username = 'youngTech';
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  handleSubmit(){
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }

  //carService = inject(CarService);
  display = '';
  /*constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }*/
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ '); // Constructor-based dependency injection
  }

  loudMessage = 'we think you are doing great!'

  num = 103.23
  birthday = new Date(2023, 3, 2)
  cost = 4560.64

  word = 'You are a champion'
}
