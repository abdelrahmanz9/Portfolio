

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs';
import { PersonalInfo } from '../interfaces/personal-info';

@Injectable({
  providedIn: 'root'
})
export class GetCustomDataService {


  constructor(private Http:HttpClient) { }



  PostPersonalData(personalInfo:PersonalInfo)
  {
    return this.Http.post("https://portfoliobe-16248-default-rtdb.firebaseio.com/personalInfo.json",personalInfo)
  }

  fetchPersonalData(){
    return this.Http.get<{[key:string]:PersonalInfo}>('https://portfoliobe-16248-default-rtdb.firebaseio.com/personalInfo.json')
    .pipe((map((res)=>{
      let myInfo = []
      for(let data in res){
        if(res.hasOwnProperty(data)){
          myInfo.push({...res[data],id:data})
        }

      }
      return myInfo
    })))


  }

  updatePersonalData(id:string,updatedPersonalInfo:PersonalInfo){
   return this.Http.put(`https://portfoliobe-16248-default-rtdb.firebaseio.com/personalInfo/${id}.json`,updatedPersonalInfo)


  }



}
