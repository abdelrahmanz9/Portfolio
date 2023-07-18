import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HomeData } from './../interfaces/home-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(private Http:HttpClient) { }

  postHomeData(form:HomeData){
   return this.Http.post('https://portfoliobe-16248-default-rtdb.firebaseio.com/homeData.json', form)
  }

  fetchHomeData(){
    return this.Http.get<{[key:string]:HomeData}>('https://portfoliobe-16248-default-rtdb.firebaseio.com/homeData.json')
    .pipe(map((res)=>{
      let data = []
      for(let info in res){
        if(res.hasOwnProperty(info)){
          data.push({...res[info],id:info})
        }

      }
      return data
    }))
  }

  updateHomeData(id:string,form:HomeData){
    return this.Http.put(`https://portfoliobe-16248-default-rtdb.firebaseio.com/homeData/${id}.json`,form )
  }
}
