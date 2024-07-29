import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupenListComponent } from './coupen-list/coupen-list.component';
import { CoupensComponent } from './coupens.component';
import { canactivateGuard } from '../canactivate.guard';

const routes: Routes = [
  {
    path: 'create',
    component: CoupensComponent, canActivate: [canactivateGuard],
    data: {expectedRole :'DEVELOPER'}
  },
  {
    path: 'list',
    component: CoupenListComponent, 
    canActivate: [canactivateGuard], data: {expectedRole :'DEVELOPER'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
