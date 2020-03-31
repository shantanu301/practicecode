import {
  Component,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-databinding",
  templateUrl: "./databinding.component.html",
  styleUrls: ["./databinding.component.css"]
})
export class DatabindingComponent
  implements
    
    OnInit {

  demo: string;
  constructor() {}
  


  ngOnInit() {
    console.log(`ngOnInit`);
  }
  



}
