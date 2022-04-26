import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Roll Dice',
      icon: 'casino',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
// programa abaixo tirado do JS 
/*
var sortes = [];

function rodaDado(sorteio,entrada) {
	var entradaDado = document.getElementById("entradaDado");
	var entrada = entradaDado.value;
    var sorteio = Math.floor(Math.random() * entrada + 1);
  //alert(sorteio + ', é seu resultado!');
  //var N = prompt("Quantos são os lados do dado?");
  //console.log ("escolhido",entrada); 

  switch(sorteio){
	case 1:document.getElementById("face").src = "img/face1.png";break;
	case 2:document.getElementById("face").src = "img/face2.png";break;
	case 3:document.getElementById("face").src = "img/face3.png";break;
	case 4:document.getElementById("face").src = "img/face4.png";break;
	case 5:document.getElementById("face").src = "img/face5.png";break;
	case 6:document.getElementById("face").src = "img/face6.png";break;
	case 7:document.getElementById("face").src = "img/face7.png";break;
    case 8:document.getElementById("face").src = "img/face8.png";break;    
    case 9:document.getElementById("face").src = "img/face9.png";break;
    case 10:document.getElementById("face").src = "img/face10.png";break; 
    case 11:document.getElementById("face").src = "img/face11.png";break;
    case 12:document.getElementById("face").src = "img/face12.png";break;
	case 13:document.getElementById("face").src = "img/face13.png";break;
    case 14:document.getElementById("face").src = "img/face14.png";break;
    case 15:document.getElementById("face").src = "img/face15.png";break;
    case 16:document.getElementById("face").src = "img/face16.png";break;
    case 17:document.getElementById("face").src = "img/face17.png";break;
    case 18:document.getElementById("face").src = "img/face18.png";break;
    case 19:document.getElementById("face").src = "img/face19.png";break;
    case 20:document.getElementById("face").src = "img/face20.png";break;
    default:document.getElementById("face").src = "img/face100.png";break;
}
escreveDadoNaTela(sorteio,entrada);
sortes.push(sorteio);
console.log(sortes);
}

function escreveDadoNaTela(sorteio,entrada){
	var retornoDado = document.getElementById("retornoDado");
	retornoDado.innerHTML = "sua sorte foi de  "+ sorteio + "  de um D" + entrada;
	var guardaDado = document.getElementById("guardoDado");
	guardaDado.innerHTML = sortes;
}

function relogar(){
	var recarregarPagina = document.getElementById("btnRefresh");    
		location.reload();
}
*/