import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rilProject';
  public databases=['MYSQL','POSTGRESQL','MONGODB']
  visible = false;
  // visible1 = false;
  // public databases=[
  //   {name:"my sql",dbs:['db1','db2','db3']},
  //   {name:"postgre sql",dbs:['db1','db2','db3']},
  //   {name:"no sql",dbs:['db1','db2','db']}
  // ]
  public icon = 'add'; 

  public toggleIcon() {
      if (this.icon === 'add') {
          this.icon = 'remove';
      } else {
          this.icon = 'add'
      }
  }
toggle(event){
    this.visible = !this.visible;
}


}

