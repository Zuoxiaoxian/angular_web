import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Echarts
import { NgxEchartsModule } from "@twp0217/ngx-echarts";

// ag-grid
import { AgGridModule } from "ag-grid-angular";

// ag-grid 的企业功能，用于分组
import 'ag-grid-enterprise'

// http
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MsgsettingComponent } from './msgsetting/msgsetting.component';
import { HelpComponent } from './help/help.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DashboardComponent,
    MsgsettingComponent,
    HelpComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
