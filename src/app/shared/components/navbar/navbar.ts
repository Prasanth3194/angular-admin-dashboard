import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { Theme } from '../../../core/services/theme';

export interface Notification {
  icon: string;
  title: string;
  msg: string;
  time: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Input() collapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();

  constructor(public theme: Theme) {}

  notifications: Notification[] = [
    { icon: 'person_add',     title: 'New user registered', msg: 'John Doe joined the platform', time: '2 min ago'  },
    { icon: 'shopping_cart',  title: 'New order received',  msg: 'Order #1042 placed — $320',    time: '15 min ago' },
    { icon: 'warning',        title: 'Server alert',        msg: 'CPU usage above 80%',           time: '1 hr ago'   }
  ];
}