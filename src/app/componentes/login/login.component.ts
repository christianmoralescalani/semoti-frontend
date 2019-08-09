import { Component, OnInit } from '@angular/core';
import { RegistrarseService, usuario, respuesta,token } from '../../servicios/registrarse.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registrarse: RegistrarseService, private router: Router) { }

  ngOnInit() {
    M.AutoInit();
  }
  async IniciarSesion(form: FormControl) {
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

}
