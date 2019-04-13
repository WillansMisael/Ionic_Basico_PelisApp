import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'pelis', loadChildren: './pages/pelis/pelis.module#PelisPageModule' },
  { path: 'peli/:id', loadChildren: './pages/pelis-details/pelis-details.module#PelisDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
