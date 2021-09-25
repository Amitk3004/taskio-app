import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTaskRoutingModule } from './user-task-routing.module';
import { UserTaskComponent } from './user-task/user-task.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [UserTaskComponent],
  exports: [UserTaskComponent],
  imports: [
    CommonModule,
    UserTaskRoutingModule,
    MaterialModule
  ]
})
export class UserTaskModule { }
