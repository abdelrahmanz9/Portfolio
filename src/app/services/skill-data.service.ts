import { map } from 'rxjs';
import { SkillData } from './../interfaces/skill-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillDataService {

  constructor(private _HttpClient:HttpClient) { }

  postSkillData(form:SkillData){
    return this._HttpClient.post('https://portfoliobe-16248-default-rtdb.firebaseio.com/skills.json',form)


  }

  fetchSkillData(){
   return this._HttpClient.get<{[key:string]:SkillData}>('https://portfoliobe-16248-default-rtdb.firebaseio.com/skills.json').pipe(map((res)=>{
    let skills = []

    for(let skill in res){
      if(res.hasOwnProperty(skill)){
        skills.push({...res[skill],id:skill})
      }

    }
    return skills
   }))
  }

  updateSkillData(id:string , form:SkillData){
   return this._HttpClient.put(`https://portfoliobe-16248-default-rtdb.firebaseio.com/skills/${id}.json`,form)
  }

  deleteSkillData(id:string){
    return this._HttpClient.delete(`https://portfoliobe-16248-default-rtdb.firebaseio.com/skills/${id}.json`)
  }
}
