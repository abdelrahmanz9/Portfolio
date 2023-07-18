import { map } from 'rxjs';
import { EducationInfo } from './../interfaces/education-info';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationInfoService {

  constructor(private _HttpClient:HttpClient) { }
  postEducationData(form:EducationInfo){
   return this._HttpClient.post('https://portfoliobe-16248-default-rtdb.firebaseio.com/educations.json', form)
  }
  fetchEducationData(){
    return this._HttpClient.get<{[key:string]:EducationInfo}>('https://portfoliobe-16248-default-rtdb.firebaseio.com/educations.json').pipe(map((res)=>{
      let infos= []
      for(let key in res){
        if(res.hasOwnProperty(key)){
          infos.push({...res[key],id:key})
        }

      }
      return infos
    }))
}

  updateEducationData(id:string, form:EducationInfo){
   return this._HttpClient.put(`https://portfoliobe-16248-default-rtdb.firebaseio.com/educations/${id}.json`,form)
  }

  deleteEducationData(id:string){
    return this._HttpClient.delete(`https://portfoliobe-16248-default-rtdb.firebaseio.com/educations/${id}.json`)
  }
}
