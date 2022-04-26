import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forja',
  templateUrl: './forja.component.html',
  styleUrls: ['./forja.component.css']
})
export class ForjaComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Forja',
      icon: 'whatshot',
      routeUrl: ''
    }
  }


  ngOnInit(): void {
  }

}
/*
// programa abaixo tirado do JS 
var valorObtido = "vento"

function cmd(textoFinal) {
 
 
     
    alert('-----------------------------BEM-VINDO A FORJA-----------------------------')

    alert('--------------------------------AQUENCENDO---------------------------------')
    //valores brutos de cada metal
    
    var metais: [
            NT: 15,
            IO: 30,
            NY: 30,
            HZ: 50,
            KL: 50,
            PL: 60,
            NG: 80,
            SS: 100
    ];

    var  typeEq = prompt('Qual classe de itens você irá forjar ? [armaduras/armas]\n caso queira sair digite [E]' )
    
        if (typeEq === 'e' && 'E' ) {return}         
        var  weapon = prompt('Qual equipamento você deseja forjar?')
        var  itemName= prompt('Qual será o nome do item forjado ? : ');
        var  cont = 0
        var  SM = 0
        var  NM: number
        NM: prompt('Quantos metais você irá utilizar ?\n no maximo são 8:\n caso queira sair digite [E]')
        //if (NM === 'e' && "E") {return} 

        // podemos mudar isso, o jogador coloca todos de uma vez no mesmo prompt e tem um comando que quebra a strung em trechos 
        //e ai colocamos numa array

        alert ('Os tipos de metais são : \nNauti [NT] \nCarvalho de ferro [IO] \nNyngala [NY] \nHailon/Zarin [HZ] \nKolrain [KL] \nPerola lunar [PL] \nOuro do Mar [NG] \nPedra Estelar[SS] \nEscolha sabiamente pois cada um da um numero especifico de bônus... ')
      
        while (cont < NM){ 
         
        var test
        var m2: number
        var m1: string
        m1: prompt('Coloque na forja os metais que você ira usar entre: \n[NT]  [IO]  [NY]  [HZ]  [KL]  [PL]  [NG]  [SS] \n mas lembre-se UM DE CADA VEZ" \ncaso queira sair digite [E]')
        //if (m1 === 'e' && "E") {return}  
        // quais valores irei somar

       
    switch (m1){
    case "NT" : m2 = 15 ; break;
    case "IO" : m2 = 30 ; break;
    case "NY" : m2 = 30 ; break;
    case "HZ" : m2 = 50 ; break;
    case "KL" : m2 = 50 ; break;
    case "PL" : m2 = 60 ; break;
    case "NG" : m2 = 80 ; break;
    case "SS" : m2 = 100 ; break;
    case "nt" : m2 = 15 ; break;
    case "io" : m2 = 30 ; break;
    case "ny" : m2 = 30 ; break;
    case "hz" : m2 = 50 ; break;
    case "kl" : m2 = 50 ; break;
    case "pl" : m2 = 60 ; break;
    case "ng" : m2 = 80 ; break;
    case "ss" : m2 = 100 ; break;
    default : test = prompt('Esse tipo de minéiro não é proprio para ser forjar. Por favor saia digitando [E]  e recomece ');
    }
        SM = SM + m2;
        cont ++;
    
        if (test === 'e' && "E") {return}    
        
        }//while Numero de metais

      
       alert(' -------------------------- FUNDINDO METAIS---------------------------------') 

     
       
        // Condições estabelecidas para variaveis dos minéiros  
    
        var d20 = parseFloat(prompt('Digite o resultado do d20 rolado: '));if (d20 === 'e' && "E") {return} 
        var int = parseFloat(prompt('Digite o valor do seu atributo de inteligencia'));if (int === 'e' && "E") {return} 
        var str = parseFloat(prompt('Digite o valor do atributo de sua força'));if (str === 'e' && "E") {return} 
        var brth = parseFloat(prompt('Digite o valor do atributo de sopro'));if (brth === 'e' && "E") {return} 
        var brth1: number
       
        // A FORJA SE DIVIDE EM DOIS TIPOS; COM SOPRO E SEM, MUDANDO AS FORMULAS entre

        var typeSoproForge = prompt(' Você irá forjar equipamentos utilizando o Sopro ? [S/N] \ncaso queira sair digite [E]' )
        if (typeSoproForge === 'e' && "E") {return} 
  
        if (typeSoproForge ='N' && 'n') {brth1 = 0;}
        else {brth = brth1} 

        var itemFinal = ""
        var totM = SM/NM;
    
        if  (typeEq == 'armas' ) {  
        var bonusDano = (totM+d20+int+str+brth1)/4;
        itemFinal = Math.round(bonusDano) + " de Dano";
        alert(itemName + '('+ weapon +') foi forjado(a)  \npossuíndo o bônus  de : ' + itemFinal);
        }

        else { // para armaduras
        var statusIt = (totM+d20+int+str+brth1)/20;
        itemFinal = Math.round(statusIt) + " de Pontos";
        alert(itemName +'('+ weapon +') foi forjado(a) \nPossuíndo bônus de atributo de : ' + itemFinal);
        }   
         
      
      alert('------------------DESAQUECENDO A FORJA--------------------- ') 
    
    var valorObtido = '<h2>' + "seu novo " + itemName+" ("+ weapon +") possui de bonus de " + itemFinal + '</h2>';

    var elementoValorObtido = document.getElementById("valorObtido");
    elementoValorObtido.innerHTML = valorObtido;

    document.getElementById("tema").src = 'img/blacksmith.gif' ;
    document.getElementById("tema").width='330';
    document.getElementById("tema").height='480';

    document.getElementById("imagem1").src = 'img/water.gif'; 
    document.getElementById("imagem1").width='800';
    document.getElementById("imagem1").height='430';   

}

function relogar() {
 var recarregarPagina = document.getElementById("btnRefresh");
 location.reload();
 }
 */