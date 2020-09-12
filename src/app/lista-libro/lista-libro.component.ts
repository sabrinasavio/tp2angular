import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibroServiceService } from '../libro-service.service';
import { NgModel } from '@angular/forms';
import { isNgTemplate, findNode } from '@angular/compiler';
import { HttpBackend } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})

export class ListaLibroComponent implements OnInit {

  //recibo la info de los libros cargados
  @Input() libros = [];
  //recibo los libros actualizados
  @Input() libroModificado = [];

  //propiedad para emitir la comunicacion al componente padre de que hay un libro prestado
  @Output() agregarLibroPrestado = new EventEmitter;


  constructor(private librosService: LibroServiceService) { }

  ngOnInit(): void {
  }

  //funcion del boton para prestar un libro
  async prestarLibro(item: any, e){
    
    try {      
      
      this.agregarLibroPrestado.emit(item);
  
      console.log(item);
    } 
    catch (error) {
      console.log(error+" error con prestarLibro")
    }
  }


}


