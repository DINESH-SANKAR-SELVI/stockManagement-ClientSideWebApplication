import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewStocksComponent } from './view-stocks/view-stocks.component';
import { ModifyStocksComponent } from './modify-stocks/modify-stocks.component';

const routes: Routes = [
  {path: 'viewStocks', component: ViewStocksComponent},
  {path: 'modifyStocks', component: ModifyStocksComponent},
  {path: 'dashBoard', component: DashboardComponent},
  {path: '', redirectTo: 'dashBoard', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
