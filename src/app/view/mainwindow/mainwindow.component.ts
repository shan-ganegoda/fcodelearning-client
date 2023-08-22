import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css']
})
export class MainwindowComponent {

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  visible : string = "/assets/menuv.png"
  notvisible : string = "/assets/menunv.png"

  opened: boolean = true;

  user:string = "Lakshan Ruwinda";


  constructor(private router: Router) {
  }

  logout(): void {
    this.router.navigateByUrl("login");
  }

}
