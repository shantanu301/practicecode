import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  userid:string
  tm:string
  otp:string
  constructor(private acrt: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.acrt.params.subscribe(
      par => this.userid = par['userid']
    )
  
    this.acrt.queryParams.subscribe(
      parm => {
        this.tm = parm['tm']
        this.otp = parm['otp']
      }
    )
  }

}
