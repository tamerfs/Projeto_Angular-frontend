import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contos',
  templateUrl: './contos.component.html',
  styleUrls: ['./contos.component.css']
})
export class ContosComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Contos',
      icon: 'record_voice_over',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
