import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "doctor",
    loadChildren: () =>
      import("./doctor/doctor.module").then(m => m.DoctorModule)
  },
  {
    path: "medical",
    loadChildren: () =>
      import("./medical/medical.module").then(m => m.MedicalModule)
  },
  {
    path: "patient",
    loadChildren: () =>
      import("./patient/patient.module").then(m => m.PatientModule)
  },
  {
    path: "staff",
    loadChildren: () => import("./staff/staff.module").then(m => m.StaffModule)
  },
  {
    path:'people',
    loadChildren:() => import('./people/people.module').then(m => m.PeopleModule)
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
