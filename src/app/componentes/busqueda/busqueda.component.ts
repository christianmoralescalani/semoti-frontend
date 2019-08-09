import { Component, OnInit } from '@angular/core';
import { NoticiasService, noticia, respuestaNoticia, respuestaNoticia2, categoria, cita, entidad, conceptos, expresion,nodo,noticiaSemantica } from '../../servicios/noticias.service';
declare var M: any;
declare var $: any;
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  noticias:noticiaSemantica[] = [];
  consulta: string;
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    
  }

  async ObtenerNoticias(palabras:string){
    const resp = await this.noticiasService.BuscarSemanticamente(palabras);
    resp.subscribe((data:noticiaSemantica[])=>{
      this.ObtenerConsulta(palabras);
      this.noticias = data;
      
    });
  }
  async ObtenerConsulta(palabras:string){
    const resp = await this.noticiasService.ObtenerConsulra(palabras);
    resp.subscribe((data:string)=>{
      this.consulta = data;
     
    });
  }

}
