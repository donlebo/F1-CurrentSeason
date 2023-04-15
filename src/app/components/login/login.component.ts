import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  email: string = '';
  password: string = '';
  show : boolean = false;

  constructor(private auth: AuthService, private renderer: Renderer2){}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'disable-scroll');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'disable-scroll');
  }

  login(){
    if(this.email == ''){
      alert('Please enter email');
      return;
    }

    if(this.password == ''){
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  hide : boolean = true;

  myFunction() {
    this.hide = !this.hide;
  }
}
