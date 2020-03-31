import { Component, OnInit } from '@angular/core';
import { IotService } from './iot.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  liveRPM:number
  constructor(private ser : IotService) { }

  ngOnInit(): void {
  }

  changeVl(vl:number){
    if(vl == 1){
      this.liveRPM = this.ser.inc()
    }else{
this.liveRPM = this.ser.dec()
    }
  }
}
