import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class GeneroServiceService {


  url = "https://aqueous-spire-30568.herokuapp.com/";

  constructor(private http: HttpClient) { }

  generos = [
    {
      id: "GNovela",
      name: "Novela"
    },
    {
      id: "GTerror",
      name: "Terror"
    },
    {
      id: "GFiccion",
      name: "Ficcion"
    }
  ];


  //Solicito los generos
  listaGeneros(){


    return this.generos;


  }




  //Metodo POST para guardar un genero
  async guardarGenero(unGenero){

    try{
      var resultado: any;
  
      resultado = await this.http.post(this.url+"genero", unGenero).toPromise();
  
      //console.log(resultado);
  
      return resultado;
  
    }
    catch(error){
      console.log(error+" error en la carga de generos");
    }
  
  }





}






