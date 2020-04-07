import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 fname : string = "shantanu"
 lname : string = "dabhole"
 sal : number = 2000
 bday = new Date()
 cstm : any = "hypertext"

}
