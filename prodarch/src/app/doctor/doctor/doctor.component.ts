import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
time = {hour: 13, minute: 30};
  constructor() { }

  ngOnInit(): void {
  }

}
