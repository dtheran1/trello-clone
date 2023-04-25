import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/todo.model';
import { DataSourceProduct } from './data-source';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  constructor (
    private http: HttpClient
  ) {}

  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'cover', 'actions']
  total= 0;
  input = new FormControl('', { nonNullable: true})

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal()
      })

    this.input.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.dataSource.find(value)
      })
  }

  update(product:Product) {
    this.dataSource.update(product.id, {
      title: 'Daniel',
    });
  }


}
