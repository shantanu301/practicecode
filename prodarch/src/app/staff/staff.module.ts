import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { PayrollService } from './payroll.service';
import { StaffRoutingModule } from './staff-routing.module';



@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ],
  providers:[PayrollService]
})
export class StaffModule { }
