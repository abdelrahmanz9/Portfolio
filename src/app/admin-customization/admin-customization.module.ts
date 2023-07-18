import { adminRoutingmodule } from './admin-routing.module';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBadgeComponent } from './components/admin-badge/admin-badge.component';
import { PersonalInfoCustomizationComponent } from './components/personal-info-customization/personal-info-customization.component';
import{HttpClientModule}from '@angular/common/http';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { HomeCustonizationComponent } from './components/home-custonization/home-custonization.component';
import { SkillsCutomizationComponent } from './components/skills-cutomization/skills-cutomization.component';
import { EducationCustomizationComponent } from './components/education-customization/education-customization.component';
import { PortofolioCutomizationComponent } from './components/portofolio-cutomization/portofolio-cutomization.component';
import { ContactCutomizationComponent } from './components/contact-cutomization/contact-cutomization.component';



@NgModule({
  declarations: [
    AdminBadgeComponent,
    PersonalInfoCustomizationComponent,
    AdminNavComponent,
    HomeCustonizationComponent,
    SkillsCutomizationComponent,
    EducationCustomizationComponent,
    PortofolioCutomizationComponent,
    ContactCutomizationComponent,


  ],
  imports: [
    BrowserModule,
    adminRoutingmodule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ]

})
export class AdminCustomizationModule { }
