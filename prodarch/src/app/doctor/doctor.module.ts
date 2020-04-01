import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DoctorRoutingModule } from './doctor-routing.module';

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    DoctorRoutingModule
  ],
  exports:[
    DoctorComponent
  ]
})
export class DoctorModule { }
