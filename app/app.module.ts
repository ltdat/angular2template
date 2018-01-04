import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee.component'
import { HomeComponent } from './home.component';
import{NotFoundComponent} from './notfound.component';
import{EmployeeDetailComponent} from './employee.detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { appRoutes } from './app.route';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeeProjectsComponent,
    EmployeeOverviewComponent,
    EmployeeDetailComponent
  ],
  providers:
  [
    EmployeeService,
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }