import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PartialsModule } from '../partials/partials.module';


@NgModule({
  imports: [BrowserModule, FormsModule, PartialsModule],
  declarations: [
    DashboardComponent, 
    HomeComponent],
  exports: [
    DashboardComponent, 
    HomeComponent
  ]
})
export class PagesModule {}