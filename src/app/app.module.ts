import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

import { AboutComponent } from './subcomponents/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './subcomponents/blog/blog.component';
import { Code404Component } from './code404/code404.component';
import { ContactComponent } from './subcomponents/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './subcomponents/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './subcomponents/projects/projects.component';
import { ShowcasesComponent } from './subcomponents/showcases/showcases.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VideoService } from './video.service';

@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ShowcasesComponent,
    BlogComponent,
    ContactComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [MatButtonModule, MatExpansionModule, MatFormFieldModule, MatSidenavModule, MatToolbarModule],
  providers: [VideoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
