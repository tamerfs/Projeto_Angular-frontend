import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Intro',
      icon: 'sports_score',
      routeUrl: ''
    }
  }



  ngOnInit(): void {
  }

  navigateToPersonagemCreate(): void {
    this.router.navigate(['products/create'])
       
    var audio1 = new Audio();
    audio1.src = "../../../../assets/som6.wav";
    audio1.play();
  }

}
