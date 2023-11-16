import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes  } from '@angular/router';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './admin/header/header.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  // Autres routes existantes...
  {path:'', component:LoginComponent},
  { path: 'ma-route', component:FooterComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
