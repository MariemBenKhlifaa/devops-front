import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FooterComponent } from '../share/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../app.module';

import { ShowResponsableComponent } from './show-responsable/show-responsable.component';
import { CreateResponsableComponent } from './show-responsable/create-responsable/create-responsable.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { CreatePartenaireComponent } from './partenaire/create-partenaire/create-partenaire.component';
import { ReclamtionComponent } from './reclamtion/reclamtion.component';
import { CategoriesComponent } from './categories/categories.component';
import { SousCategoriesComponent } from './categories/sous-categories/sous-categories.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ListOffresComponent } from './partenaire/list-offres/list-offres.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
   CreateResponsableComponent,
    ShowResponsableComponent,
    PartenaireComponent,
    CreatePartenaireComponent,
    ReclamtionComponent,
    CategoriesComponent,
    SousCategoriesComponent,
    CreateCategoryComponent,
    ProfileAdminComponent,
    ListOffresComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,FormsModule
  ]
})
export class AdminModule { }
