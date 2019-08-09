import { Component, OnInit } from '@angular/core';
import { RegistrarseService, usuario, respuesta } from '../../servicios/registrarse.service';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
declare var M: any;
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  
  constructor(private registrarse: RegistrarseService,private router:Router) { }

  ngOnInit() {
    M.AutoInit();
  }
  async Ver(form: FormControl) {
    if (!form.valid) {
      M.toast({ html: 'Todos los campos son requeridos' });
    } else 
    {
      let usuario: usuario = {
        usuario: form.value.usuario,
        contrasena: form.value.contrasena
      }

      const res = await this.registrarse.Registrarse(usuario);
      res.subscribe(async (data: respuesta) => {
        if (data.status == 'Correcto') {
          const usuario: usuario = <usuario>data.mensaje;
          M.toast({ html: `Usuario ${usuario.usuario} ha sido creado correctamente` });
          this.router.navigate(['/']);
        }
        else {

          M.toast({ html: `${data.mensaje}` });
          form.reset();
        }

      });

    }

  }



}
