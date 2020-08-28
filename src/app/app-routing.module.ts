import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { Employee2Component } from './employee2/employee2.component';
import {AuthGuard} from './services/auth.guard';
import {ChildauthguardGuard} from './services/childauthguard.guard';
import {CandeactGuard} from './services/candeact.guard';
import { AboutchildComponent } from './aboutchild/aboutchild.component';
import { Aboutchild2Component } from './aboutchild2/aboutchild2.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch : 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent, canActivate: [AuthGuard],
  canActivateChild:[ChildauthguardGuard],
   children:[
    {path:'aboutchild', component:AboutchildComponent},
    {path:'aboutchild2', component:Aboutchild2Component}
  ]},
  {path: 'employee/:id', component:EmployeeComponent},
  {path: 'employee2', component:Employee2Component},
  {path:'search', component:SearchComponent, canDeactivate:[CandeactGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
