import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod' ;


@Injectable({
  providedIn: 'root'
})


export class RegistrarseService {
  usuario: usuario;
  URL_registro:string = `${environment.backend_url}/usuarios/RegistroLocal`;
  URL_INICIOSESION:string = `${environment.backend_url}/usuarios/IniciarSesion`;
  URL_GOOGLE:string = `${environment.backend_url}/usuarios/RegistroGoogle`;

  constructor(private http: HttpClient) { }

  async Registrarse(usuario: usuario) {
   
    return  this.http.post(this.URL_registro,{usuario:usuario.usuario,contrasena:usuario.contrasena});
  }

  async IniciarSesion(usuario:usuario){
    return this.http.post(this.URL_INICIOSESION,{usuario:usuario.usuario,contrasena:usuario.contrasena});
  }
  async IniciarSesionGoogle(usuario:usuario){
    return this.http.post(this.URL_GOOGLE,{usuario:usuario.usuario,contrasena:usuario.contrasena});
  }

}
export interface usuario {
  usuario: string,
  contrasena: string
}
export interface respuesta{
  status: string,
  mensaje: usuario | string | token
}
export interface usuario{
  
  usuario:string
}
export interface token{
  token:{
    token:string
  }
}
