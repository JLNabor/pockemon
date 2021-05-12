import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { PockemonCardComponent } from './components/pockemon-card/pockemon-card.component';
import { WhoIamComponent } from './components/who-iam/who-iam.component';

const routes: Routes = [
  {path:'', component:BodyComponent},
  {path:'pockemon', component:BodyComponent},
  {path:'card', component:PockemonCardComponent},
  {path:'who', component:WhoIamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
