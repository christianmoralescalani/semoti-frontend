import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class RegistrarseService {
  usuario: usuario;
  URL_registro:string = 'http://192.168.137.7:3000/usuarios/RegistroLocal';
  URL_INICIOSESION:string = 'http://192.168.137.7:3000/usuarios/IniciarSesion';

  constructor(private http: HttpClient) { }

  async Registrarse(usuario: usuario) {
   
    return  this.http.post(this.URL_registro,{usuario:usuario.usuario,contrasena:usuario.contrasena});
  }

  async IniciarSesion(usuario:usuario){
    return this.http.post(this.URL_INICIOSESION,{usuario:usuario.usuario,contrasena:usuario.contrasena});
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
