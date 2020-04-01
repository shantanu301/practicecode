import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediComponent } from './medi/medi.component';
import { MedicalRoutingModule } from './medical-routing.module';



@NgModule({
  declarations: [MediComponent],
  imports: [
    CommonModule,
    MedicalRoutingModule
  ],
  exports:[
    MediComponent
  ]
})
export class MedicalModule { }
