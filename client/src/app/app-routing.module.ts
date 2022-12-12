import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentRecordComponent } from './incident-record/incident-record.component';
import { AddRecordComponent } from'./incident-record/add-record/add-record.component';
import { EditRecordComponent } from './incident-record/edit-record/edit-record.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},

  {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
  {path: 'incident-list', component: IncidentRecordComponent, data: {title: 'Incident Record'}},
  
  {path: 'add', component: AddRecordComponent, data: {title: 'Add Incident Record'}},
  {path: 'edit/:id', component: EditRecordComponent, data: {title: 'Edit Incident Record'}},

  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
