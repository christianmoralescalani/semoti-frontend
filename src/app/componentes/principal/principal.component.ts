import { Component, OnInit } from '@angular/core';
import { NoticiasService, noticia, respuestaNoticia, respuestaNoticia2 } from '../../servicios/noticias.service';
import dateformat from 'date-format';
import { respuesta } from 'src/app/servicios/registrarse.service';
import { FormControl } from '@angular/forms';
declare var $: any;
declare var M: any;
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  date2: string = dateformat('dd-MM-yyyy', new Date());
  noticiasObtenidas: noticia[] = [];
  numeroNoticias: number = 0;
  numeroTotalNoticias: string = '0';
  noticiaActual: noticia = <noticia>{};
  constructor(private noticias: NoticiasService) { }

  ngOnInit() {
    $(document).ready(function () {
      //$('.sidenav').sidenav();
      $('#modal1').modal();
      $('.datepicker').datepicker({
        container: document.getElementsByClassName('bg'),
        format: 'dd-mm-yyyy'
      });
      //$('select').formSelect();

    });
    this.ObtenerNoticiasDia();
    this.CantidadNoticias();

  }
   getUrl(foto) {
    return `url(${foto})`;
  }
  SinFecha(calendario) {
    calendario.value = 'Sin Fecha';
  }
  async ObtenerNoticiasDia() {
    const res = await this.noticias.NoticiasFecha(this.date2);
    res.subscribe((data: respuestaNoticia) => {
      
      if (data.status == 'Error') {
        M.toast({ html: `${data.mensaje}` });
      } else {
        this.noticiasObtenidas = <noticia[]>data.mensaje;
        this.numeroNoticias = data.mensaje.length;
      }

    });
  }
  async MostrarNoticiaOriginal(id: string) {

    $('#modal1').modal('open');
    const res = await this.noticias.NoticiaOriginal(id);
    res.subscribe((data: respuestaNoticia2) => {
      console.log(data);
      this.noticiaActual = <noticia>data.mensaje;

    });

  }

  async BuscarConCondiciones(fecha, fuente) {
    const res = await this.noticias.NoticiaFechaFuente(fecha.value, fuente.value);
    res.subscribe((data: respuestaNoticia) => {
      if (data.status == "Correcto") {
        this.noticiasObtenidas = <noticia[]>data.mensaje;
        this.numeroNoticias = data.mensaje.length;
      } else {
        this.noticiasObtenidas = [];
        this.numeroNoticias = 0;

        M.toast({ html: `${data.mensaje}` });
      }

    })

  }
  async CantidadNoticias() {
    const resp = await this.noticias.CantidadNoticias();
    resp.subscribe((data: respuestaNoticia) => {
      if (data.status = 'Correcto') {
        this.numeroTotalNoticias = <string>data.mensaje
      } else {
        this.numeroTotalNoticias = '--';
      }

    });
  }

}
