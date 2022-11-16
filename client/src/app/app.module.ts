import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialMasterComponent } from './components/material-master/material-master.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { ServiceJobComponent } from './components/service-job/service-job.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
