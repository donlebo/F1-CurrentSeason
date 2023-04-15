import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router){}

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['home'])
    }, err => {
      alert('Something went wrong');
      this.router.navigate(['login']);
    })
  }

  signup(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Signup successful');
      this.router.navigate(['login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['signup']);
    })
  }

  logout(){
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }, err => {
      alert(err.message);
    })
  }
}
