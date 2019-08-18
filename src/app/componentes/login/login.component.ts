import { Component, OnInit } from '@angular/core';
import { RegistrarseService, usuario, respuesta,token } from '../../servicios/registrarse.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  USUARIO:usuario = <usuario>{};
  constructor(private registrarse: RegistrarseService, private router: Router,private authService: AuthService) { }

  ngOnInit() {
    M.AutoInit();
    
  }
  async IniciarSesion(form) {
    if (!form.valid) {
      M.toast({ html: 'Todos los campos son requeridos' });
    } else {
      let usuario: usuario = {
        usuario: form.value.usuario,
        contrasena: form.value.contrasena
      }

      const res = await this.registrarse.IniciarSesion(usuario);
      res.subscribe(async (data: respuesta) => {
        if (data.status == 'Correcto') {
          const token:token= <token> data.mensaje;
          M.toast({ html: `Bienvenido` });
          localStorage.setItem('token',`${token.token}`);
          this.router.navigate(['/Principal']);
        }
        else {

          M.toast({ html: `${data.mensaje}` });
          form.reset();
        }

      });

    }
  }
  async Google() {
     const usu = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
     
     this.USUARIO = {
       usuario : usu.name, 
       contrasena : usu.id
     }
     //console.log(this.USUARIO);
     const resp = await this.registrarse.IniciarSesionGoogle(this.USUARIO);
     resp.subscribe(async (data:respuesta)=>{
      if (data.status == 'Correcto') {
        const token:token= <token> data.mensaje;
        M.toast({ html: `Bienvenido` });
        localStorage.setItem('token',`${token.token}`);
        this.router.navigate(['/Principal']);
      }
      
     });
    //this.registrarse.IniciarSesionGoogle()
  }
  async Facebook() {
    const usu = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.USUARIO = {
      usuario : usu.name, 
      contrasena : usu.id
    }
    //console.log(this.USUARIO);
    const resp = await this.registrarse.IniciarSesionGoogle(this.USUARIO);
    resp.subscribe(async (data:respuesta)=>{
     if (data.status == 'Correcto') {
       const token:token= <token> data.mensaje;
       M.toast({ html: `Bienvenido` });
       localStorage.setItem('token',`${token.token}`);
       this.router.navigate(['/Principal']);
     }
     
    });
  } 
  Salir(): void {
    this.authService.signOut();
  }



}
