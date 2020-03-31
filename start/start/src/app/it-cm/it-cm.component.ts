import { Component, OnInit } from '@angular/core';
import { EvPk } from './evpk';

@Component({
  selector: 'app-it-cm',
  templateUrl: './it-cm.component.html',
  styleUrls: ['./it-cm.component.css']
})
export class ItCmComponent implements OnInit {
  evPk:EvPk
  constructor() { }

  ngOnInit(): void {
  }

  captureAlert(evPk:EvPk){
console.log(evPk);
this.evPk = evPk
  }
}
