import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Mapa',
      icon: 'sailing',
      routeUrl: ''
    }
  }



  ngOnInit(): void {
  }

}
