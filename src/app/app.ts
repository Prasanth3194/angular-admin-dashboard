import { Component, OnInit, inject, signal, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from './shared/components/navbar/navbar';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Theme } from './core/services/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  sidebarCollapsed = signal(false);
  sidebarMobileOpen = signal(false);
  theme = inject(Theme);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && !this.theme.isDark()) {
      document.body.classList.add('light-theme');
    }
  }

  toggleSidebar() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth <= 768) {
      this.sidebarMobileOpen.update(v => !v);
    } else {
      this.sidebarCollapsed.update(v => !v);
    }
  }

  closeMobileSidebar() {
    this.sidebarMobileOpen.set(false);
  }
}