import { ProjectInfo } from './../../../interfaces/project-info';
import { Project } from './../../../interfaces/project';
import { ProjectsDataService } from './../../../services/projects-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-main',
  templateUrl: './project-main.component.html',
  styleUrls: ['./project-main.component.scss']
})
export class ProjectMainComponent implements OnInit {

  constructor(private _ProjectsDataService:ProjectsDataService, private _ativatedRoute:ActivatedRoute) { }
  projectId:string = ""
   projectData:Project = <Project>{}
   ProjectInfo:ProjectInfo=<ProjectInfo>{}
  getProjectDataById(id:string){
    this._ProjectsDataService.getProjectDataById(id).subscribe((res)=>{
      console.log(res)
     this.projectData = res
    this.ProjectInfo ={
      gethupLink:res.gethupLink,
      projectLink:res.projectLink,
      dependences:res.dependences,
      description:res.description,
      projectName:res.projectName

    }
    })
  }
  ngOnInit(): void {
    this.projectId = this._ativatedRoute.snapshot.params["id"]
    this. getProjectDataById(this.projectId)
  }

}
