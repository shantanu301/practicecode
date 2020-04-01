import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MediComponent } from './medi/medi.component';

const routes: Routes = [
    { path: "", component: MediComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRoutingModule {}
