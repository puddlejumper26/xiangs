import { ShowcasesComponent } from './subcomponents/showcases/showcases.component';
import { ContactComponent } from './subcomponents/contact/contact.component';
import { HomeComponent } from './subcomponents/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Code404Component } from './code404/code404.component';
import { BlogComponent } from './subcomponents/blog/blog.component';
import { ProjectsComponent } from './subcomponents/projects/projects.component';
import { AboutComponent } from './subcomponents/about/about.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'projects',component: ProjectsComponent},
  {path:'showcases',component: ShowcasesComponent},
  {path:'blog',component: BlogComponent},
  // {path:'contacts',component: ContactComponent},
  {path:'**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
