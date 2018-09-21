import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: "products", children: [
      { path: "", pathMatch: "full", component: ListComponent },
      { path: "new", component: NewComponent },
      { path: ":id/edit", component: UpdateComponent },
      { path: ":id", component: DetailsComponent}
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "products" }
  // { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
