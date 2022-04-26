import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[];
  displayedColumns = ["id","name","classe","especie","langage",
  "player","dinheiro","xp","level","age","forca","resistencia",
  "agilidade","persepcao","presisao","inteligencia",
  "sopro","coragem","carisma","titulo","talento","aptidoes",
  "ventura","vontade","estresse","medo","tendencia",
  "status","dano","defesa","valorArmadura",
  "valorArma","hitpoint","action"] 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
   
  }
  
}
