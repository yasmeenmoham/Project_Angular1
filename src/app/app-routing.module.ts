import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { CoutactusComponent } from './coutactus/coutactus.component';
import { LoginComponent } from './login/login.component';
import { MuneComponent } from './mune/mune.component';
import { RegistratainformComponent } from './registratainform/registratainform.component';
import { ServicesComponent } from './services/services.component';
import { OurTeamComponent } from './our-team/our-team.component';
const routes: Routes = [

  {path:'home' ,  component:HomeComponent},
  {path:'aboutus' ,  component:AboutusComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'coutactus' ,  component:CoutactusComponent},
  {path:'login' ,  component:LoginComponent},
  {path:'menu' ,  component:MuneComponent},
  {path:'Registian' ,  component:RegistratainformComponent},
  {path:'Services' ,  component:ServicesComponent},
  {path:'ourTeam' ,  component:OurTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
