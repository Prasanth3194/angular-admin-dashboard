import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ApiService, User } from '../../core/services/api';

@Component({
  selector: 'app-users',
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users implements OnInit {
  loading = signal(true);
  searchQuery = '';
  dataSource = new MatTableDataSource<User>([]);
  columns = ['id', 'name', 'email', 'company', 'city', 'status', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe(users => {
      this.dataSource.data = users;
      this.loading.set(false);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getColor(id: number): string {
    const colors = ['#38BDF8', '#43d9ad', '#ff6584', '#febc2e', '#6c63ff', '#f97316'];
    return colors[id % colors.length];
  }

  getStatus(id: number): string {
    if (id % 4 === 0) return 'Inactive';
    if (id % 5 === 0) return 'Pending';
    return 'Active';
  }
}