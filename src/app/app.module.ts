import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';


import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CompanyComponent } from './company/company.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CompanyFactoryComponent } from './company-factory/company-factory.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TabletemplateComponent } from './tabletemplate/tabletemplate.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonInterceptorService } from './common-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    HeaderComponent,
    TopWidgetsComponent,
    TopThreeProductsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    MainComponent,
   CompanyComponent,
   CompanyFactoryComponent,
   TabletemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    FontAwesomeModule,
    ChartModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    HttpClientModule,
    MatButton,
    MatIconModule,
    MatDialogModule, 
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatGridListModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CommonInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
