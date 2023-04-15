import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token: string = "";

  constructor() { }

  getToken(): string {
    if (!this.token) {
      this.token = Math.random().toString(36).substr(2);
    }
    return this.token;
  }
}
