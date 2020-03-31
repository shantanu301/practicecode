import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ForgetpinComponent } from './forgetpin/forgetpin.component';
import { ProfileComponent } from './dashborad/profile.component';
import { FriendsComponent } from './dashborad/friends.component';
import { LoginGuard } from './forgetpin/login.guard';

const childRoutes : Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'friends',component:FriendsComponent}
]

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashborad/:userid',component:DashboradComponent, children:childRoutes},
  {path:'dashborad',redirectTo:'dashborad/123', pathMatch:'full'},
  {path:'resetpin',component:ForgetpinComponent, canActivate:[LoginGuard]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
