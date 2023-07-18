import { map } from 'rxjs';
import { Project } from './../interfaces/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  constructor(private Http:HttpClient) { }

  postProjectData(form:Project){
   return this.Http.post('https://portfoliobe-16248-default-rtdb.firebaseio.com/projects.json', form)
  }

  fetchProjectData(){
    return this.Http.get <{[key:string]:Project}>('https://portfoliobe-16248-default-rtdb.firebaseio.com/projects.json').pipe(map((res)=>{
      let projectData = []
      for(let key in res){
        if(res.hasOwnProperty(key)){
          projectData.push({...res[key],id:key})
        }
      }
      return projectData
    }))
  }

  updateProjectData(id:string , form:Project){
    return this.Http.put(`https://portfoliobe-16248-default-rtdb.firebaseio.com/projects/${id}.json`,form)
  }

  deleteProjectData(id:string){
    return this.Http.delete(`https://portfoliobe-16248-default-rtdb.firebaseio.com/projects/${id}.json`)
  }

  getProjectDataById(id:string){
    return this.Http.get<Project>(`https://portfoliobe-16248-default-rtdb.firebaseio.com/projects/${id}.json`)
  }

}
