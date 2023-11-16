import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateResponsableComponent } from './show-responsable/create-responsable/create-responsable.component';
import { ShowResponsableComponent } from './show-responsable/show-responsable.component';
import { GainEquiboosterComponent } from './gain-equibooster/gain-equibooster.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ReclamtionComponent } from './reclamtion/reclamtion.component';
import { CategoriesComponent } from './categories/categories.component';
import { SousCategoriesComponent } from './categories/sous-categories/sous-categories.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[{path:'create',component:CreateResponsableComponent},{path:'show',component:ShowResponsableComponent},{path:'dashboard',component:GainEquiboosterComponent}

,{path:"partenaire",component:PartenaireComponent},{path:"reclamations",component:ReclamtionComponent},{path:"categories",component:CategoriesComponent},{path:"souscategories",component:SousCategoriesComponent},{
  path:"profile",component:ProfileAdminComponent
}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
