import { ProjectsDataService } from './../services/projects-data.service';
import { Project } from './../interfaces/project';
import { SlideUpService } from './../services/slide-up.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private _SlideUpService:SlideUpService,private _ProjectsDataService:ProjectsDataService) { }
  projectsData:Project[]= []

  goSlide(){
    this._SlideUpService.slide()
  }
  fetchProjectData(){
    this._ProjectsDataService.fetchProjectData().subscribe((res)=>{
      this.projectsData = res
      console.log(this.projectsData)
    })
  }

  
  ngOnInit(): void {
    this.fetchProjectData()
  }

}
