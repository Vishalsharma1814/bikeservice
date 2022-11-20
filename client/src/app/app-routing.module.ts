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
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService]},
  {path: 'add-customer', component: AddCustomerComponent,canActivate:[AuthGuardService]},
  {path: 'inventory', component: InventoryComponent,canActivate:[AuthGuardService]},
  {path: 'material-master', component: MaterialMasterComponent,canActivate:[AuthGuardService]},
  {path: 'personal-information', component: PersonalInformationComponent,canActivate:[AuthGuardService]},
  {path: 'service-job', component: ServiceJobComponent,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
