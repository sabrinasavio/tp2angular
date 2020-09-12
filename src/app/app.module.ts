import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';
import { PrestarLibroComponent } from './prestar-libro/prestar-libro.component';
import { ContenedorComponent } from './contenedor/contenedor.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoLibroComponent,
    ListaLibroComponent,
    PrestarLibroComponent,
    ContenedorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
