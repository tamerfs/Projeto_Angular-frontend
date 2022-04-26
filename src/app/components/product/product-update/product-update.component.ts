import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route:ActivatedRoute  ) { }

  ngOnInit(): void {
    var id: any
    id = this.route.snapshot.paramMap.get("id")
    this.productService.readById(id).subscribe(product => {
      this.product = product});
  }

  updateProduct(): void{
this.productService.update(this.product).subscribe(() =>{
  this.productService.showMessage('Personagem Atualizado com Sucesso!');
  this.router.navigate(['/players'])

var audio1 = new Audio();
  audio1.src = "../../../../assets/som3.wav";
  audio1.play();

});
  }

  cancel(): void{
    this.router.navigate(['/players'])
var audio1 = new Audio();
  audio1.src = "../../../../assets/som9.wav";
  audio1.play();
  }
}
