import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./view/login/login.component";
import {MainwindowComponent} from "./view/mainwindow/mainwindow.component";
import {EmployeeComponent} from "./view/modules/employee/employee.component";
import {HomeComponent} from "./view/home/home.component";
import {UserComponent} from "./view/modules/user/user.component";
import {SignupComponent} from "./view/signup/signup.component";
import {CourcesComponent} from "./view/modules/cources/cources.component";
import {CourceviewComponent} from "./view/pages/courceintro/courceview.component";
import {CourcecontentComponent} from "./view/pages/courcecontent/courcecontent.component";
import {AboutComponent} from "./view/about/about.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "", redirectTo: 'login', pathMatch: 'full'},
  {
    path: "main",
    component: MainwindowComponent,
    children: [
      {path: "home", component: HomeComponent},
      {path: "employee", component: EmployeeComponent},
      {path: "user", component: UserComponent},
      {path: "cources", component: CourcesComponent},
      {path: "view/:id" , component: CourceviewComponent},
      {path: "content/:id" , component: CourcecontentComponent},
      {path: "about" , component: AboutComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
