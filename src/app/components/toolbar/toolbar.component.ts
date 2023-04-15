import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private _location: Location, public router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  logout(){
    this.auth.logout();
  }
}
