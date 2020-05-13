import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormularioComponent } from 'src/app/components/formulario/formulario.component';
import { ContactoRoutingModule } from './contacto-routing.module';
@NgModule({
  declarations: [
    FormularioComponent,
  ],
  imports: [
    ContactoRoutingModule,
    FormularioComponent,
    CommonModule,
  ],
  exports: [
    FormularioComponent,
    ContactoRoutingModule
  ]
})

export class ContactoModule { }
