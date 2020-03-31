import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getVal(mobile: string, otp: string) {
    this.router.navigate(["dashborad", mobile], {
      queryParams: {
        tm: new Date().getDate(),
        otp: otp
      }
    });
  }
}
