import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  show : boolean = false;

  constructor(private auth: AuthService, private renderer: Renderer2){}

  ngOnInit() {
    this.renderer.addClass(document.body, 'disable-scroll');
    this.show = true;
    setTimeout(()=>{
      this.show=false
    }, 2000);
    return;
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'disable-scroll');
  }

  logout(){
    this.auth.logout();
  }
}
