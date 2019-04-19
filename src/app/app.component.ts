import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rilProject';
  public databases = ['POSTGRESQL', 'MONGODB', 'FIREBASE']
  visible = false;
  // visible1 = false;

  public icon = 'add';

  public toggleIcon() {
    if (this.icon === 'add') {
      this.icon = 'remove';
    } else {
      this.icon = 'add'
    }
  }
  toggle(event) {
    this.visible = !this.visible;
  }
  //for drag and drop
  tables = [
    { name: 'Employee', columns: ['empId', 'empName', 'salary'] },
    { name: 'Department', columns: ['deptId', 'deptName', 'totalNum'] }
  ]
  //  Employee=['empId','empName','salary']
  //  Department=['deptId','deptName','totalNum']
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  done = [];
  container2 = [];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}

