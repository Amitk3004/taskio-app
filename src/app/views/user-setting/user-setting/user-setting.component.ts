import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
  taskList: any = [];
  taskForm: FormGroup

  constructor(private fb: FormBuilder, private sb: MatSnackBar) {
    this.taskForm = this.fb.group({
      taskName: [null, Validators.required]
    })
   }

  ngOnInit() {
    const list = JSON.parse(localStorage.getItem('taskList')?? '[]');
    if(list && list.length) {
      this.taskList = list;
    }
  }

  addTask() {
    const value = this.taskForm.get('taskName')?.value;
    if(value) {
      this.taskList.push(value);
    }
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }

  saveList() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    this.sb.open('List saved successfully', 'ok');
  }

}
