import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';



const routes: Routes = [
  {path:'', component: HeaderComponent},
  {path:'', component: GalleryComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
