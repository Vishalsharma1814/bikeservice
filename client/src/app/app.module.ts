import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialMasterComponent } from './components/material-master/material-master.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup'
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { ServiceJobComponent } from './components/service-job/service-job.component';



@NgModule({
  declarations: [
    AppComponent,
    MaterialMasterComponent,
    InventoryComponent,
    AddCustomerComponent,
    PersonalInformationComponent,
    ServiceJobComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
