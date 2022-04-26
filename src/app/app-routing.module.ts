import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { PlayersComponent } from './views/players/players.component';
import { MapaComponent } from './views/mapa/mapa.component';
import { LojasComponent } from './views/lojas/lojas.component';
import { GhandhaComponent } from './views/ghandha/ghandha.component';
import { ForjaComponent } from './views/forja/forja.component';
import { DadosComponent } from './views/dados/dados.component';
import { ContosComponent } from './views/contos/contos.component';
import { BibliotecaComponent } from './views/biblioteca/biblioteca.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [{
  //rota raiz
  path: "",
  component: HomeComponent,
},{
  // rota produtos
  path: "intro",
  component: ProductCrudComponent, 
},{
  // rota produtos
  path: "players",
  component: PlayersComponent, 
},{
  // rota produtos
  path: "mapa",
  component: MapaComponent, 
},{
  // rota produtos
  path: "loja",
  component: LojasComponent, 
},{
  // rota produtos
  path: "jogo",
  component: GhandhaComponent, 
},{
  // rota produtos
  path: "forja",
  component: ForjaComponent, 
},{
  // rota produtos
  path: "dados",
  component: DadosComponent, 
},{
  // rota produtos
  path: "contos",
  component: ContosComponent, 
},{
  // rota produtos
  path: "biblioteca",
  component: BibliotecaComponent, 
},{
  path: "products/create",
  component: ProductCreateComponent,
},{
  path: "products/update/:id",
  component: ProductUpdateComponent,
},{
  path: "products/delete/:id",
  component: ProductDeleteComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
