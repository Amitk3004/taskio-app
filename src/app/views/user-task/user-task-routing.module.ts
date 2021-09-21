import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTaskComponent } from './user-task/user-task.component';

const routes: Routes = [
  {
    path: '',
    component: UserTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTaskRoutingModule { }
