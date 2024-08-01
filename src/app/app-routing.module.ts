import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { canactivateGuard } from './canactivate.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [canactivateGuard], data: {expectedRole :'DEVELOPER'}},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {path: 'statistics', component: StatisticsComponent, canActivate: [canactivateGuard], data: {expectedRole :'DEVELOPER'}},
  {
    path: 'coupens',
    loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  },
  {path: 'pages', component: PagesComponent, canActivate: [canactivateGuard], data: {expectedRole :'DEVELOPER'}},
  {path: 'media', component: MediaComponent, canActivate: [canactivateGuard], data: {expectedRole :'DEVELOPER'}},
  {path: 'settings', component: SettingsComponent, canActivate: [canactivateGuard], data: {expectedRole :'DEVELOPER'}},
  {path: 'company', component: CompanyComponent, canActivate: [canactivateGuard], data: {expectedRole :'DEVELOPER'}},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
