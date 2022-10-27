import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  result =''

  getAction(char:any){
    this.result += char
  }

  reset(){
    this.result =''
  }
  equal(){
    this.result = eval(this.result).toFixed(1)
  }
}
