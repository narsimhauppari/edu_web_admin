import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { CreateComponent } from "./components/create/create.component";
import { ListComponent } from "./components/list/list.component";


const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "edit/:id",
    component: CreateComponent
  },
  {
    path: "list",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
