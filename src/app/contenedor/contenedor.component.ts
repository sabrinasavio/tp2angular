import { Component, OnInit } from '@angular/core';
import { LibroServiceService } from '../libro-service.service';
import { GeneroServiceService } from '../genero-service.service';
import { NgModelGroup } from '@angular/forms';



@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  //genero la lista de libros en el contenedor para pasarla al componente lista libro
  lista:any = [];
  //genero la lista de libros prestados en el contenedor para pasarla al componente libros prestados
  listaPrestados:any = [];
  //genero la lista de libros devueltos para pasarla al componente lista libros
  listaActualizados:any = [];

  constructor(private libroService: LibroServiceService, private generoService: GeneroServiceService) { }


  async ngOnInit() {

    //cargo la lista de libros con la info que viene del service
    this.lista = await this.libroService.listaDeLibros();

  }


  //metodo que se ejecuta cuando se carga un libro nuevo, para agregar el libro a la lista
  async agregarLibroALista(){

    this.lista = await this.libroService.listaDeLibros();

    //this.lista.push(unLibro);

  }


  //metodo que se ejecuta cuando se presta un libro, para agregarlo a la lista prestados
  agregarLibroPrestado(unLibro){

    this.listaPrestados.push(unLibro);
    //console.log(listaPrestados);
  }


  //metodo que se ejecuta cuando se modifica un libro prestado, para mandarlo a la lista de libros disponibles
  async actualizoLibro(unLibroPrestado){


    this.listaActualizados.push(unLibroPrestado);

    //this.listaActualizados = await this.libroService.actualizoLibro();


    
  }
}
