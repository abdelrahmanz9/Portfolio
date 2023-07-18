import { map } from 'rxjs';
import { Contact } from './../interfaces/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(private Http:HttpClient) { }

  postContactData(form:Contact){
   return this.Http.post('https://portfoliobe-16248-default-rtdb.firebaseio.com/contact.json',form)
  }

  fetchContactData(){
  return  this.Http.get<{[key:string]:Contact}>('https://portfoliobe-16248-default-rtdb.firebaseio.com/contact.json').pipe(map((res)=>{
      let contactData = []
      for(let key in res){
        if(res.hasOwnProperty(key)){
          contactData.push({...res[key],id:key})
        }
      }

      return contactData
    }))
  }

  updateContactData(id:string,form:Contact){
   return this.Http.put(`https://portfoliobe-16248-default-rtdb.firebaseio.com/contact/${id}.json`,form)
  }
}
