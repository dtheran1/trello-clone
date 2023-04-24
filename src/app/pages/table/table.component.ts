import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/todo.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  constructor (
    private http: HttpClient
  ) {}

  products: Product[] = []
  columns: string[] = ['id', 'title', 'price', 'cover']

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.products = data;
      })
  }
}
