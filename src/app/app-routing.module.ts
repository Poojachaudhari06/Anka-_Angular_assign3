import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login', component:LoginComponent },
  // {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {
    path:'dashboard',component:DashboardComponent
  },
  {
   path:'registration',component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
