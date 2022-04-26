import { NgModule , LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent} from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { RedDirective } from './directives/red.directive';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { LojasComponent } from './views/lojas/lojas.component';
import { ForjaComponent } from './views/forja/forja.component';
import { DadosComponent } from './views/dados/dados.component';
import { MapaComponent } from './views/mapa/mapa.component';
import { GhandhaComponent } from './views/ghandha/ghandha.component';
import { ContosComponent } from './views/contos/contos.component';
import { BibliotecaComponent } from './views/biblioteca/biblioteca.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { PlayersComponent } from './views/players/players.component';
//import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

//import localePT from '@angular/common/locales/pt';
//import {registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    LojasComponent,
    ForjaComponent,
    DadosComponent,
    MapaComponent,
    GhandhaComponent,
    ContosComponent,
    BibliotecaComponent,
    RedDirective,
    ProductCreateComponent,
    ProductReadComponent,
    PlayersComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
   // ProductRead2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
  //{provide: LOCALE_ID,
  //  useValue: 'pt-BR'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
