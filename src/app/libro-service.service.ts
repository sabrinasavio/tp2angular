import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({
  providedIn: 'root'
})
export class LibroServiceService {


  url = "https://aqueous-spire-30568.herokuapp.com/";

  constructor(private http: HttpClient) { }

  
  //Metodo POST para guardar libro en el service
  async guardarLibro(unLibro){

    try{
      var resultado: any;

      resultado = await this.http.post(this.url+"libro", unLibro).toPromise();

      //console.log(resultado);

      return resultado;

    }
    catch(error){
      console.log(error);
    }

  }


  //Metodo GET para solicitar los libros disponibles 
  async listaDeLibros(){

    try{
      var resultado: any;

      resultado = await this.http.get(this.url+"libro").toPromise();

      //console.log(resultado);

      return resultado;

    }
    catch(error){
      console.log(error+"error en listaDeLibros");
    }
    
  } 
  


  //Metodo PUT para actualizar un libro prestado
  /**
   * Se envia en nombre de la persona a la base de datos
   * @param idItem 
   * @param inputLended 
   */


  async actualizarLibro(idItem, inputLended){ 

    try{
      
      var cambioPersona = {
        lended: inputLended,
      };

      var resultado: any;

      resultado = await this.http.put(this.url+"libro/" + idItem, cambioPersona).toPromise();

      console.log(resultado);

    }
    catch(error){
      console.log(error + "error en libro modificado");
    }

  }

  
}
