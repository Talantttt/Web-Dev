import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'book-list-frontend';

  constructor(private router: Router) {}
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToItemList() {
    this.router.navigate(['/item-list']);
  }
}
