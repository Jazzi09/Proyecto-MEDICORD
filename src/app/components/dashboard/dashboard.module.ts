import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { IgxCalendarModule } from 'igniteui-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PatientsComponent } from './patients/patients.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    HomepageComponent,
    PatientsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    IgxCalendarModule
  ]
})
export class DashboardModule { }
