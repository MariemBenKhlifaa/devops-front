import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,


    NotfoundComponent,
           LoginComponent,

  ],
  imports: [
    MatIconModule,
    BrowserModule,

    BrowserAnimationsModule,MatListModule,AppRoutingModule,HttpClientModule,FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
