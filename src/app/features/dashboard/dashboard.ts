import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { ApiService, User } from '../../core/services/api';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    RouterModule,
    BaseChartDirective,
    MatTableModule,
    MatProgressSpinnerModule,
    StatCard
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  today = new Date();
  loading = signal(true);
  recentUsers: User[] = [];
  displayedColumns = ['name', 'email', 'company', 'status'];

  stats = [
    { label: 'Total Users',  value: '12,430', change: '+8.2%',  icon: 'people',        color: '#38BDF8', up: true  },
    { label: 'Revenue',      value: '$84,210', change: '+12.5%', icon: 'attach_money',  color: '#43d9ad', up: true  },
    { label: 'Total Orders', value: '3,842',   change: '+5.1%',  icon: 'shopping_cart', color: '#febc2e', up: true  },
    { label: 'Bounce Rate',  value: '24.3%',   change: '-2.3%',  icon: 'trending_down', color: '#ff6584', up: false }
  ];

  doughnutLabels = ['Electronics', 'Clothing', 'Food', 'Books'];
  doughnutColors = ['#38BDF8', '#43d9ad', '#ff6584', '#febc2e'];

  lineChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Revenue ($)',
      data: [30000, 42000, 38000, 55000, 49000, 72000, 84000],
      borderColor: '#38BDF8',
      backgroundColor: 'rgba(56,189,248,0.1)',
      tension: 0.4,
      fill: true,
      pointBackgroundColor: '#38BDF8',
      pointRadius: 4
    }]
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8888a8' } },
      x: { grid: { display: false }, ticks: { color: '#8888a8' } }
    }
  };

  doughnutData: ChartData<'doughnut'> = {
    labels: this.doughnutLabels,
    datasets: [{
      data: [35, 28, 22, 15],
      backgroundColor: this.doughnutColors,
      borderWidth: 0,
      hoverOffset: 6
    }]
  };

  doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%',
    plugins: { legend: { display: false } }
  };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe(users => {
      this.recentUsers = users.slice(0, 6);
      this.loading.set(false);
    });
  }

  getColor(id: number): string {
    const colors = ['#38BDF8', '#43d9ad', '#ff6584', '#febc2e', '#6c63ff', '#f97316'];
    return colors[id % colors.length];
  }

  getStatus(id: number): string {
    return id % 3 === 0 ? 'Inactive' : 'Active';
  }
}