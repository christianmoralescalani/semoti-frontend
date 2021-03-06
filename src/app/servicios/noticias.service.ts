import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod' ;
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  NOTICIAS_FECHA_URL: string = `${environment.backend_url}/noticias/fecha`;
  NOTICIA_ORIGINAL: string = `${environment.backend_url}/noticias/noticiaOriginal/`;
  NOTICIA_FECHA_FUENTE: string = `${environment.backend_url}/noticias/`;
  CANTIDAD_NOTICIAS: string = `${environment.backend_url}/noticias/cantidadNoticias/`;
  NOTICIA_SEMANTICA_GENERAL: string = `${environment.backend_url}/semantica/`;
  COMPARAR_NOTICIA:string = `${environment.backend_url}/semantica/compararNoticia`;

  constructor(private http: HttpClient) { }

  NoticiasFecha(fecha) {

    return this.http.post(this.NOTICIAS_FECHA_URL+`/${fecha}`, {
      fecha: fecha,
      token: localStorage.getItem('token')
    });
  }
  NoticiaOriginal(id: string) {
    return this.http.post(this.NOTICIA_ORIGINAL + id, {
      token: localStorage.getItem('token')
    });
  }
  NoticiaFechaFuente(fecha, fuente) {
    return this.http.post(this.NOTICIA_FECHA_FUENTE + `fuente/${fuente}/fecha/${fecha}`, {
      token: localStorage.getItem('token')
    });
  }
  ObtenerCategorias(id: string) {
    return this.http.post(this.NOTICIA_SEMANTICA_GENERAL + 'categorias', {
      token: localStorage.getItem('token'),
      id: id
    });
  }
  ObtenerCitas(id: string) {
    return this.http.post(this.NOTICIA_SEMANTICA_GENERAL + 'citas', {
      token: localStorage.getItem('token'),
      id: id
    });
  }
  ObtenerEntidades(id: string) {
    return this.http.post(this.NOTICIA_SEMANTICA_GENERAL + 'entidades', {
      token: localStorage.getItem('token'),
      id: id
    });
  }
  ObtenerConceptos(id: string) {
    return this.http.post(this.NOTICIA_SEMANTICA_GENERAL + 'conceptos', {
      token: localStorage.getItem('token'),
      id: id
    });
  }
  ObtenerExpresiones(id: string) {
    return this.http.post(this.NOTICIA_SEMANTICA_GENERAL + 'expresiones', {
      token: localStorage.getItem('token'),
      id: id
    });
  }
  BuscarSemanticamente(cadena: string) {
    return this.http.post(this.NOTICIA_SEMANTICA_GENERAL + 'busquedaCadena', {
      token: localStorage.getItem('token'),
      cadena: cadena
    });
  }
  ObtenerConsulra(cadena: string) {
    return this.http.post(this.NOTICIA_SEMANTICA_GENERAL + 'cadena', {
      token: localStorage.getItem('token'),
      cadena: cadena
    });
  }
  CantidadNoticias() {
    return this.http.post(this.CANTIDAD_NOTICIAS, {
      token: localStorage.getItem('token')
    });
  }
  CompararNoticia(id:string){
    return this.http.post(this.COMPARAR_NOTICIA,{
      token:localStorage.getItem('token'),
      id:id
    });
  }
}
export interface respuestaNoticia {
  status: string,
  mensaje: noticia[] | string
}
export interface respuestaNoticia2 {
  status: string,
  mensaje: noticia
}

export interface noticia {
  id: string,
  titulo: string,
  url: string,
  cuerpo: string,
  fuente: string,
  fecha: string,
  foto: string,
  etiquetado?: boolean,
  resumen:string
}
export interface categoria {
  categoria: string,
  relevancia: string
}
export interface cita {
  cita: string
}
export interface entidad {
  categoria: string,
  entidad: string
  relevancia: string
}
export interface conceptos {
  categoria: string,
  concepto: string
  relevancia: string
}
export interface expresion {
  expresion: string,
  categoria: string
}
export interface noticiaSemantica {
  identity: {
    low: number,
    high: number
  },
  labels: string[],
  properties: {
    name: string,
    fecha: string,
    id: string
  },
  nodoA: nodo[],
  nodoB: nodo[],
}
export interface nodo {
  identity: {
    low: number,
    high: number
  },
  labels: string[],
  properties: {
    name: string
  }
}