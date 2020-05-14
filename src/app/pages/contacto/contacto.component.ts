import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  cargando: boolean
  constructor() {
    // this.cargando = true;
  }

  ngOnInit() {
    this.terminarCarga()
  }

  terminarCarga() {
    setTimeout(() => {
      this.cargando = false
    }, 3000);
  }

}
