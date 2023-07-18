import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSliderComponent } from './components/project-slider/project-slider.component';
import { ProjectMainComponent } from './components/project-main/project-main.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';




@NgModule({
  declarations: [
    ProjectSliderComponent,
    ProjectMainComponent,
    ProjectInfoComponent,


  ],
  imports: [
    CommonModule,
    
  ]
})
export class ProjectDetailsModule { }
