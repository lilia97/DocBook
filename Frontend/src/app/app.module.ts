import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    GalleryComponent,
    ContactComponent,
    HospitalsComponent,
    DoctorsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'doctors',//localhost:4200/hospitals/doctors
        component: DoctorsComponent
      },
      {
        path:'hospitals',//localhost:4200/hospitals
        component: HospitalsComponent
      },
      {
        path:'',// home page
        component: GalleryComponent
      },
      
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
