import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  frmGrp : FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.frmGrp =  this.fb.group({
      fname : this.fb.control('',Validators.required),
      lname : this.fb.control('',Validators.required),
      eml : this.fb.control('',Validators.required)
    })
  }

}
