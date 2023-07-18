import { ContactCutomizationComponent } from './components/contact-cutomization/contact-cutomization.component';
import { AdminBadgeComponent } from './components/admin-badge/admin-badge.component';

import { AdminAuthGuardGuard } from './../admin-auth-guard.guard';
import { PortofolioCutomizationComponent } from './components/portofolio-cutomization/portofolio-cutomization.component';
import { EducationCustomizationComponent } from './components/education-customization/education-customization.component';
import { SkillsCutomizationComponent } from './components/skills-cutomization/skills-cutomization.component';
import { PersonalInfoCustomizationComponent } from './components/personal-info-customization/personal-info-customization.component';
import { HomeCustonizationComponent } from './components/home-custonization/home-custonization.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

let adminModule:Routes = [
  {path:"admin" , component:AdminBadgeComponent , canActivate:[AdminAuthGuardGuard],
  children:[


      {path:"", redirectTo:"home-customization" , pathMatch:'full'},
      {path:"home-customization" , component:HomeCustonizationComponent},
      {path:"about-customization" , component:PersonalInfoCustomizationComponent   },
      {path:"skills-customization" , component:SkillsCutomizationComponent  },
      {path:"education-customization" , component:EducationCustomizationComponent  },
      {path:"portfolio-customization" , component:PortofolioCutomizationComponent   },
      {path:"contact-customization" , component:ContactCutomizationComponent   },
  ]
 },

]


@NgModule({
  imports:[
    RouterModule.forChild(adminModule)

  ],
  exports:[RouterModule]
})
export class adminRoutingmodule {

}
