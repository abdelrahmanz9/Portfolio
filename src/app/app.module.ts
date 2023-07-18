import { ProjectDetailsModule } from './project-details/project-details.module';
import { AdminCustomizationModule } from './admin-customization/admin-customization.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { SkillsComponent } from './skills/skills.component';
import { ExpComponent } from './exp/exp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProgressWidthDirective } from './directive/progress-width.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    NavComponent,
    SkillsComponent,
    ExpComponent,
    AdminLoginComponent,
    ProgressWidthDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AdminCustomizationModule,
    ProjectDetailsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
