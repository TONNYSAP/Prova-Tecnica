import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialDComponent } from './components/material-d/material-d.component';
import { BlackboardComponent } from './components/blackboard/blackboard.component';
import { MaterialListComponent } from './components/material-list/material-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'start', component: StartComponent},
  {path: 'material-d', component: MaterialDComponent},
  {path: 'blackboard', component: BlackboardComponent},
  {path: 'materialList', component: MaterialListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
