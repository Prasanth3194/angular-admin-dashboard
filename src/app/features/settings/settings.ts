import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Theme } from '../../core/services/theme';

export interface NotificationSetting {
  label: string;
  desc: string;
  enabled: boolean;
}

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings {
  saved = false;

  profile = {
    firstName: 'Prasanth',
    lastName:  'Balakrishnan',
    email:     'arjun@company.com',
    role:      'Administrator'
  };

  notifications: NotificationSetting[] = [
    { label: 'Email Notifications', desc: 'Receive updates and alerts via email.',        enabled: true  },
    { label: 'Push Notifications',  desc: 'Browser push alerts for critical events.',     enabled: false },
    { label: 'New User Alerts',     desc: 'Notify when a new user registers.',            enabled: true  },
    { label: 'Weekly Reports',      desc: 'Get a weekly digest of analytics.',            enabled: true  }
  ];

  constructor(public theme: Theme) {}

  saveProfile() {
    this.saved = true;
    setTimeout(() => this.saved = false, 3000);
  }
}