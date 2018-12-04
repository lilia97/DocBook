import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'hospitals', component: HospitalsComponent
/*     children:[
      { path: '', redirectTo: 'doctors', pathMatch: 'full' },
      {path:'doctors', component: DoctorsComponent}
    ] */
  },
  {path:'hospitals/doctors', component: DoctorsComponent},
  {path:'hospitals/doctors/profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
