import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTaskRoutingModule } from './user-task-routing.module';
import { UserTaskComponent } from './user-task/user-task.component';


@NgModule({
  declarations: [UserTaskComponent],
  exports: [UserTaskComponent],
  imports: [
    CommonModule,
    UserTaskRoutingModule
  ]
})
export class UserTaskModule { }
