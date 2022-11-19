import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialMasterComponent } from './components/material-master/material-master.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { RegisterComponent } from './components/register/register.component';
import { ServiceJobComponent } from './components/service-job/service-job.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'material-master', component: MaterialMasterComponent},
  {path: 'personal-information', component: PersonalInformationComponent},
  {path: 'service-job', component: ServiceJobComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
