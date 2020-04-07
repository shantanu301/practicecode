import { Component } from "@angular/core";
import { RestService } from "./rest.service";
import { Data,OneDto, ManyDto } from './domain/domain';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  data : Data
  user : Array<Data>
  
  constructor(private rst: RestService) {}

  getOne() {
    this.rst.getOne().subscribe(
      res => {
        let dto = res as OneDto
        this.data = dto.data

        this.rst.createUser(this.data).subscribe(
          res=>console.log(res)
        )
      }
    );
    }
    getMany(){
      this.rst.getMany().subscribe(
        res=>{
          let dto = res as ManyDto
          this.user = dto.data
        }
      )
    }

}
