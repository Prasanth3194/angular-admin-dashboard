import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { StatCard } from '../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-analytics',
  imports: [CommonModule, BaseChartDirective, StatCard],
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss'
})
export class Analytics {
  periods = ['7D', '30D', '3M', '1Y'];
  activePeriod = '30D';

  stats = [
    { label: 'Page Views',      value: '284,390', change: '+18%', icon: 'visibility',    color: '#38BDF8', up: true  },
    { label: 'Unique Visitors', value: '91,240',  change: '+11%', icon: 'person',        color: '#43d9ad', up: true  },
    { label: 'Avg. Session',    value: '3m 42s',  change: '+6%',  icon: 'timer',         color: '#febc2e', up: true  },
    { label: 'Bounce Rate',     value: '24.3%',   change: '-3%',  icon: 'trending_down', color: '#ff6584', up: false }
  ];

  barChartData: ChartData<'bar'> = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
      label: 'Visitors',
      data: [4200,5100,4800,6300,5900,7200,8100,7600,8900,9200,8700,10200],
      backgroundColor: 'rgba(56,189,248,0.7)',
      borderRadius: 6
    }]
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8888a8' } },
      x: { grid: { display: false }, ticks: { color: '#8888a8' } }
    }
  };

  lineChartData: ChartData<'line'> = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Conversion %',
      data: [2.1, 2.4, 2.2, 2.8, 3.1, 3.4],
      borderColor: '#43d9ad',
      backgroundColor: 'rgba(67,217,173,0.1)',
      tension: 0.4,
      fill: true,
      pointBackgroundColor: '#43d9ad',
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

  polarData: ChartData<'polarArea'> = {
    labels: ['Organic', 'Social', 'Direct', 'Referral'],
    datasets: [{
      data: [38, 27, 21, 14],
      backgroundColor: [
        'rgba(56,189,248,0.7)',
        'rgba(67,217,173,0.7)',
        'rgba(254,188,46,0.7)',
        'rgba(255,101,132,0.7)'
      ]
    }]
  };

  polarOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    plugins: { legend: { position: 'bottom', labels: { color: '#8888a8', boxWidth: 12 } } }
  };

  deviceLabels = ['Desktop', 'Mobile', 'Tablet'];
  deviceColors = ['#38BDF8', '#43d9ad', '#febc2e'];

  deviceData: ChartData<'doughnut'> = {
    labels: this.deviceLabels,
    datasets: [{
      data: [58, 32, 10],
      backgroundColor: this.deviceColors,
      borderWidth: 0,
      hoverOffset: 6
    }]
  };

  doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%',
    plugins: { legend: { display: false } }
  };
}