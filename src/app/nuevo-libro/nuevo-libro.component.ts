import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LibroServiceService } from '../libro-service.service';
import { GeneroServiceService } from '../genero-service.service';



@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  
  //propiedad para emitir la comunicacion al componente padre de que hay un libro nuevo
  @Output() agregarUnNuevoLibro = new EventEmitter();

  book = {
    name: "",
    author: "",
    gender: "",
    lended:""
  };


  genders: any;


  constructor(private librosService: LibroServiceService, private generoService: GeneroServiceService) { }

  ngOnInit(): void {

    this.genders = this.generoService.listaGeneros();

    //console.log('generos ', this.genders);

  }

  //variables para asociar con los input del formulario donde se cargan los libros nuevos
  name = '';
  author = '';
  gender = '';
  lended = "";
  
  //funcion del boton para cargar un libro nuevo
  async agregarLibro(){
    //estructura de datos del libro que voy a mandar al contenedor
    var book = {
      name: this.name,
      author: this.author,
      lended: this.lended,
      gender: this.gender
    }


    var respuesta: any;

    respuesta = await this.librosService.guardarLibro(book);

    this.agregarUnNuevoLibro.emit();
    
    //console.log(book);


  }

}
