import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendComponent } from './send/send.component';


const routes: Routes = [
  {path:'',component:SendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent =[SendComponent];
