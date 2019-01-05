import { NgModule } from '@angular/core';

// 添加路由
import { RouterModule, Routes } from "@angular/router";

// 路由对应的组件
  // 描述概览---首界面
import { OverviewComponent } from "../app/overview/overview.component";

  // 仪表盘---界面
import { DashboardComponent } from "../app/dashboard/dashboard.component";

  // 数据后台设置
import { MsgsettingComponent } from "../app/msgsetting/msgsetting.component";

  // 帮助界面
import { HelpComponent } from "../app/help/help.component";

  // Reports 报表
import { ReportsComponent } from "../app/reports/reports.component";


const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: OverviewComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'msgset', component: MsgsettingComponent},
  {path: 'help', component: HelpComponent},
  {path: 'reports', component: ReportsComponent},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
