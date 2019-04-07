import { Component } from '@angular/core';
import {TestComponent} from './test.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';

  constructor(private service:TestComponent){
     

  }
datas=[];
ngOnInit(){
   this.service.getvalue().subscribe(data=>{
   this.datas=data;
   })
}
}
