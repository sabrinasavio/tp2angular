import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { identity } from 'rxjs';
import { LibroServiceService } from '../libro-service.service';
import { GeneroServiceService } from '../genero-service.service';

@Component({
  selector: 'app-prestar-libro',
  templateUrl: './prestar-libro.component.html',
  styleUrls: ['./prestar-libro.component.css']
})
export class PrestarLibroComponent implements OnInit {

  @Input() librosPrestados = [];

  @Output() actualizarElLibro = new EventEmitter();

  constructor(private librosService: LibroServiceService, private generoService: GeneroServiceService) { }

  ngOnInit(): void {
  }


  

  
   // Funcion para actualizar la persona a quien prestamos libro en el service
   /**
   * @param idItem
   */


  async actualizarLibro(idItem){
    try {
      
      var lended = (<HTMLInputElement>document.getElementById(idItem)).value;

      await this.librosService.actualizarLibro(idItem, lended);

    }
    catch(error){
      console.log(error+"error al actualizar persona")
    }
  }  





  // Funcion para borrar libro de la lista prestados
  async devolver(item: any) {

    try {      
      
      var index = this.librosPrestados.indexOf(item);
      this.librosPrestados.splice(index, 1);
    
    } 
    catch (error) {
      console.log(error+" error al actualizar libro")
    }
    
  }


  // Funcion para editar nombre de la persona a quien prestamos
  async editarLibro(item: any) {

    try {      
      
      if ("click") {
        return item.lended = "";
      }

    } 
    catch (error) {
      console.log(error+" error al actualizar libro")
    }
  }
  

}

