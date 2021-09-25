import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.scss']
})
export class UserTaskComponent implements OnInit {
  taskList = [];

  constructor() { }

  ngOnInit() {
    this.taskList = JSON.parse(localStorage.getItem('taskList')?? '[]');
  }

}
