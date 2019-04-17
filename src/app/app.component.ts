import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rilProject';
  // public databases=['MYSQL','POSTGRESQL','MONGODB']
  // visible = false;
  // visible1 = false;
  public databases = [
    { name: "my sql", tables: [{name:"EMPLOYEE", columns:['empid','empname','salary']},{name:"DEPARTMENT", columns1:['deptid','deptname']}, {name:"TABLE3", columns2:['column1 ','column2','column3']}] },
    // { name: "postgre sql", tables: [{name:"TABLE1", columns:['column1','column2','column3']}, {DEPARTMENT:['deptid','deptname']}, {TABLE3:['column1 ','column2','column3']}] },
    // { name: "no sql", tables: [{name:"tb1", columns:['c1','c2','c3']}, {DEPARTMENT:['deptid','deptname']}, {TABLE3:['column1 ','column2','column3']}] }
  ]

  public icon = 'add';

  public toggleIcon() {
    if (this.icon === 'add') {
      this.icon = 'remove';
    } else {
      this.icon = 'add'
    }
  }
  // toggle(event){
  //     this.visible = !this.visible;
  // }
  //for drag and drop

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [

  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}

