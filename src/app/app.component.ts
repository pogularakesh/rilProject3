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
public show:boolean=false;
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
    { name: 'Employee', columns: ['employeeId', 'employeeName', 'salary'] },
    { name: 'Department', columns: ['departmentId', 'departmentName','totalNums'] },
    // { name: 'Table 3', columns: ['Field 1', 'Field 2'] }
  ]
  
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  done = [];
  container2 = [];
  drop(event: CdkDragDrop<string[]>) {
    if(this.done.length<1 ){
    if (event.previousContainer === event.container) {
      // this.show=true;
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // this.show=false;
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  }

  drop1(event: CdkDragDrop<string[]>) {
    if( this.container2.length<1 ){
    if (event.previousContainer === event.container) {
      // this.show=true;
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // this.show=false;
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  }
}

