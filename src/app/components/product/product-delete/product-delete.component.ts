import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  
  product: Product

  constructor(private productService: ProductService, private router: Router, private route:ActivatedRoute  ) { }

  ngOnInit(): void {
    var id: any
    id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe(product => {
      this.product = product});
  }

  deleteProduct(): void{
this.productService.delete(this.product.id).subscribe(() =>{
this.productService.showMessage('Personagem Deletado com Sucesso!');
this.router.navigate(['/players']);
  
var audio1 = new Audio();
audio1.src = "../../../../assets/som10.mp3";
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
