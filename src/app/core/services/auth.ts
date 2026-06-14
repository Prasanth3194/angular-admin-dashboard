import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Auth {
  private _loggedIn = signal<boolean>(true); // Always true for portfolio demo

  isLoggedIn() {
    return this._loggedIn();
  }

  logout() {
    this._loggedIn.set(false);
  }
}