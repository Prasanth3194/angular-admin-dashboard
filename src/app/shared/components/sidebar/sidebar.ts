import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() collapsed = false;
  @Input() mobileOpen = false;
  @Output() backdropClick = new EventEmitter<void>();

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard',  route: '/dashboard' },
    { label: 'Users',     icon: 'people',     route: '/users'     },
    { label: 'Analytics', icon: 'bar_chart',  route: '/analytics' },
    { label: 'Settings',  icon: 'settings',   route: '/settings'  }
  ];
}