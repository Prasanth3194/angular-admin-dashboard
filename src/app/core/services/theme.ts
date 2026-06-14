import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class Theme {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  isDark = signal<boolean>(this.isBrowser ? localStorage.getItem('theme') !== 'light' : false);

  toggleTheme(): void {
    this.isDark.update(v => !v);
    if (this.isBrowser) {
      document.body.classList.toggle('light-theme', !this.isDark());
      localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
    }
  }
}