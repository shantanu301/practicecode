import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private serpayroll: PayrollService ) { }

  ngOnInit(): void {
  }

}
