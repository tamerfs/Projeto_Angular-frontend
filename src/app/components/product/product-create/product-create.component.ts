import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
 
})
export class ProductCreateComponent implements OnInit {
  
product: Product = {
  name: '',
  classe: '',
  especie: '',
  langage: '',
  player: '',
  dinheiro: null,
  age: null,
  xp: null,
  level: null,
  forca: null,
  resistencia: null,
  agilidade: null,
  persepcao: null,
  presisao: null,
  inteligencia: null,
  sopro: null,
  coragem: null,
  carisma: null,
  titulo: '',
  talento: '',
  aptidoes: '',
  ventura: null,
  vontade: null,
  estresse: null,
  medo: null,
  tendencia: null,
  status: null,
  dano: null,
  defesa: null,
  valorArmadura: null,
  valorArma: null,
  hitpoint: null
}

  constructor(private productService: ProductService , private router: Router) { }

  ngOnInit(): void {}

  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage('SEU HEROI NASCEU!')
        this.router.navigate(['/players'])           
    })

    var audio1 = new Audio();
    audio1.src = "../../../../assets/som7.wav";
    audio1.play();
   
  }

  cancel(): void{
    this.router.navigate(['/intro'])
    var audio1 = new Audio();
    audio1.src = "../../../../assets/som8.mp3";
    audio1.play();
  }



}
