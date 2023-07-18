import { PortofolioCutomizationComponent } from './admin-customization/components/portofolio-cutomization/portofolio-cutomization.component';
import { EducationCustomizationComponent } from './admin-customization/components/education-customization/education-customization.component';
import { SkillsCutomizationComponent } from './admin-customization/components/skills-cutomization/skills-cutomization.component';
import { PersonalInfoCustomizationComponent } from './admin-customization/components/personal-info-customization/personal-info-customization.component';
import { HomeCustonizationComponent } from './admin-customization/components/home-custonization/home-custonization.component';

import { ProjectMainComponent } from './project-details/components/project-main/project-main.component';
import { AdminBadgeComponent } from './admin-customization/components/admin-badge/admin-badge.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuardGuard } from './admin-auth-guard.guard';

const routes: Routes = [
  {path:"" , redirectTo:"home" ,  pathMatch:'full'},
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"portfolio" , component:PortfolioComponent},
  {path:"contact" , component:ContactComponent},
  {path:"login" , component:AdminLoginComponent},

  {path:"project/:id" , component:ProjectMainComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
