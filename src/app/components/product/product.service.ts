import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "https://quiet-refuge-48358.herokuapp.com/heroes"
  //baseUrl = "http://localhost:3001/personagem"
  // ligação front com backend

  constructor(private snackBar: MatSnackBar ,private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x' , {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e)) 
      );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e)) 
      );
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e)) 
      );
  }
// na parte que for fazer atualização de personagens vamos ter que usar essa função.
  update(product: Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e)) 
      );
  }

// Parte para deletar a função
  delete(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
     return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e)) 
    );
  }
// pop de erro ao usuario.
  errorHandler(e: any): Observable<any>{
     console.log(e)
     this.showMessage('Ocorreu um erro!', true)
       return EMPTY
}
}
