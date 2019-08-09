import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NoticiasService, noticia, respuestaNoticia, respuestaNoticia2, categoria, cita, entidad, conceptos, expresion } from '../../servicios/noticias.service';
declare var M: any;
declare var $: any;
@Component({
  selector: 'app-estructurar',
  templateUrl: './estructurar.component.html',
  styleUrls: ['./estructurar.component.css']
})
export class EstructurarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private noticias: NoticiasService) { }
  ID: string = "";
  noticia: noticia = <noticia>{};
  categorias: categoria[] = [];
  citas: cita[] = [];
  entidades: entidad[] = [];
  conceptos: conceptos[] = [];
  expresiones: expresion[] = [];
  ngOnInit() {

    this.ID = this.route.snapshot.params.id;
    this.NoticiaOriginal(this.ID);
    this.ObtenerCategorias(this.ID);
    this.ObtenerCitas(this.ID);
    this.ObtenerEntidades(this.ID);
    this.ObtenerConceptos(this.ID);
    this.ObtenerExpresiones(this.ID);
  }


  AlternarDerecha(opcion) {
    switch (opcion) {
      case "1":
        $('div.categorias').removeClass("hide");
        $('div.citas').addClass("hide");
        $('div.resumen').addClass("hide");
        break;
      case "2":
        $('div.categorias').addClass("hide");
        $('div.citas').removeClass("hide");
        $('div.resumen').addClass("hide");
        break;
      case "3":
        $('div.categorias').addClass("hide");
        $('div.citas').addClass("hide");
        $('div.resumen').removeClass("hide");
        break;
    }
  }
  AlternarIzquierda(opcion) {
    switch (opcion) {
      case "1":
        $('div.entidades').removeClass("hide");
        $('div.conceptos').addClass("hide");
        $('div.expresiones').addClass("hide");
        break;
      case "2":
        $('div.entidades').addClass("hide");
        $('div.conceptos').removeClass("hide");
        $('div.expresiones').addClass("hide");
        break;
      case "3":
        $('div.entidades').addClass("hide");
        $('div.conceptos').addClass("hide");
        $('div.expresiones').removeClass("hide");
        break;
    }
  }
  async NoticiaOriginal(id: string) {
    const resp = await this.noticias.NoticiaOriginal(id);
    resp.subscribe((data: respuestaNoticia2) => {
      this.noticia = <noticia>data.mensaje;

    });
  }
  async ObtenerCategorias(id: string) {
    const resp = await this.noticias.ObtenerCategorias(id);
    resp.subscribe((data: categoria[]) => {
      this.categorias = data;
    });
  }
  async ObtenerCitas(id: string) {
    const resp = await this.noticias.ObtenerCitas(id);
    resp.subscribe((data: cita[]) => {
      this.citas = data;
    });
  }
  async ObtenerEntidades(id: string) {
    const resp = await this.noticias.ObtenerEntidades(id);
    resp.subscribe((data: entidad[]) => {
      this.entidades = data;
    });
  }
  async ObtenerConceptos(id: string) {
    const resp = await this.noticias.ObtenerConceptos(id);
    resp.subscribe((data: conceptos[]) => {
      this.conceptos = data;
    });
  }
  async ObtenerExpresiones(id: string) {
    const resp = await this.noticias.ObtenerExpresiones(id);
    resp.subscribe((data: expresion[]) => {
      this.expresiones = data;
    });
  }
}
