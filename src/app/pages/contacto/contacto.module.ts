import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { FormularioComponent } from 'src/app/components/formulario/formulario.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { MapComponent } from 'src/app/components/map/map.component';
@NgModule({
  declarations: [
    ContactoComponent,
    FormularioComponent,
    SpinnerComponent,
    MapComponent

  ],
  imports: [
    ContactoRoutingModule,
    CommonModule,
  ],
  exports: [
    ContactoComponent,
    SpinnerComponent,
    ContactoRoutingModule
  ]
})

export class ContactoModule { }
