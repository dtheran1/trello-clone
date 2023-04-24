export interface ToDo {
  id: string
  title: string
}

export interface Column {
  title: string;
  todos: ToDo[]
}

export interface Product {
  id: string;
  title: string;
  images: string[];
  price: string
}
