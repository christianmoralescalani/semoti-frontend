import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import {environment} from '../../../environments/environment.prod' ;
declare var M:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url = `${environment.neo4_url}`;

  constructor(private router:Router) { }

  ngOnInit() {
    M.AutoInit();
    const token = localStorage.getItem('token');
    if(!token){
      M.toast({ html: `Necesita Iniciar Sesion` });
      this.router.navigate(['/']);
    }
  }
  async CerrarSesion(){
    await localStorage.clear();
    M.toast({ html: `Hasta Luego` });
    this.router.navigate(['/']);
  }

  

}
