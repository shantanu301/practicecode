import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="card">
    <div class="card-header">Profile name</div>
    <div class="card-body">profile conntent</div>
    <div class="card-footer">profile footer</div>
    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
