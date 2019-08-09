import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
declare var M:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    M.AutoInit();
    const token = localStorage.getItem('token');
    if(!token){
      M.toast({ html: `Necesita Iniciar Sesion` });
      this.router.navigate(['/']);
    }
  }

  

}
