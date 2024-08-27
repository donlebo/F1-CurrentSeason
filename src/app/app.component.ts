import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'f1-currentSeason';

  constructor(private router: Router) {}

  ngOnInit(){
    const isAuthenticated = localStorage.getItem('token') === 'true';

    if (isAuthenticated) {
      const hasCompletedSlider = localStorage.getItem('slider') === 'true';

      if (hasCompletedSlider) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/home']);
      }
    } else {
      const isRegistering = window.location.pathname === '/signup';

      if (isRegistering) {
        this.router.navigate(['/signup']);
      } else {
        this.router.navigate(['/login']);
      }
    }

  }
}
