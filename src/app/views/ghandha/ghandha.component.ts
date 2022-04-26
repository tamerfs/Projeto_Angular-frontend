import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghandha',
  templateUrl: './ghandha.component.html',
  styleUrls: ['./ghandha.component.css']
})
export class GhandhaComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Games',
      icon: 'style',
      routeUrl: ''
    }
  }



  ngOnInit(): void {
  }

}
