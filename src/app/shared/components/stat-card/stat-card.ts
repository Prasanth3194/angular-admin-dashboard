import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss'
})
export class StatCard {
  @Input() label = '';
  @Input() value = '';
  @Input() change = '';
  @Input() icon = '';
  @Input() iconBg = '#38BDF8';
  @Input() isUp = true;
}