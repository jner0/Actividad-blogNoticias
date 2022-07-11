import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrNoticias: Noticia[] = [];
  resultado: string = "";
  titulo: string = "";
  url: any;
  texto: string = "";
  fecha: any;

  constructor() { 

    this.arrNoticias = [
      {titulo: 'Ola de delincuencia en la ciudad de Chone', url:'./assets/Images/imagenChone.jpg', texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', fecha:'28/06/2022'},

      {titulo: 'Bitcoin supera los 200 mil dolares', url:'./assets/Images/bitcoin-5.jpg', texto:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', fecha:'06/07/2022'},
    ]

  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void{
    this.resultado = "";
    this.arrNoticias.forEach(noticia =>{
      this.resultado += `<li> <h2>${noticia.titulo}</h2>  <div class='img-container'> <img src='${noticia.url}'></div> <p>${noticia.texto}</p> <p>${noticia.fecha}</p> </li>`
    });
  }

  guardarDatos(){

    if(this.titulo !== "" && this.url !== "" && this.texto !== "" && this.fecha !== ""){
      let newNoticia: Noticia = {
        titulo: this.titulo,
        url: this.url,
        texto: this.texto,
        fecha: this.fecha
      }
  
      this.arrNoticias.unshift(newNoticia);
      this.cargarDatos();
      this.titulo = "";
      this.url = "";
      this.texto = "";
      this.fecha = "";
    }else{
      alert("Los campos no pueden estra vacios");
    }

    
  }

}
