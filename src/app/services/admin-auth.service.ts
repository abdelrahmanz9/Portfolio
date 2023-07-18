import { Injectable, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService   {

  constructor(private _Router:Router  ) { }


  isAdmine:boolean =localStorage.getItem("isAdmin")? JSON.parse(localStorage.getItem('isAdmin') || '{}') : false
  submitData(form:NgForm , element:ElementRef){
    if(form.value.email == "abdelrahmansaad883z9@gmail.com" && form.value.password == 5055144){
      this._Router.navigate(["admin"])
      this.isAdmine = true
      localStorage.setItem("isAdmin", JSON.stringify(this.isAdmine))
    }else{
      this.isAdmine = false
        element.nativeElement.style.display = "block"
        setTimeout(()=>{
          element.nativeElement.style.display = "none"
            },2000)
    }
  }

 

}
