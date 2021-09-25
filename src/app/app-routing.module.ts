import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(x => x.DashboardModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./views/user-task/user-task.module').then(x => x.UserTaskModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./views/user-profile/user-profile.module').then(x => x.UserProfileModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./views/user-setting/user-setting.module').then(x => x.UserSettingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
