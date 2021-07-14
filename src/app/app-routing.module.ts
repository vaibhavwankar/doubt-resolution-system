import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptSolveDoubtComponent } from './accept-solve-doubt/accept-solve-doubt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoubtListComponent } from './doubt-list/doubt-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RaiseDoubtComponent } from './raise-doubt/raise-doubt.component';
import { SolveDoubtComponent } from './solve-doubt/solve-doubt.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'doubt', pathMatch: 'full' },
      { path: 'doubt', component: DoubtListComponent },
      { path: 'raise-doubt', component: RaiseDoubtComponent },
      { path: 'solve-doubt', component: SolveDoubtComponent },
      { path: 'accept-doubt', component: AcceptSolveDoubtComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
