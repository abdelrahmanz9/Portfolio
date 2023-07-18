import { AdminAuthService } from './../admin-auth.service';

import { Component,  ElementRef, OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _AdminAuthService:AdminAuthService , private _Router:Router ) { }
  @ViewChild("alert") alertElemnt!:ElementRef




  submitData(form:NgForm){
    if(form.value.email == "abdelrahmansaad883z9@gmail.com" && form.value.password == 5055144){
      this._Router.navigate(["admine"])
    }else{

        this.alertElemnt.nativeElement.style.display = "block"
        setTimeout(()=>{
          this.alertElemnt.nativeElement.style.display = "none"
            },2000)
    }
  }
  ngOnInit(): void {

    console.log(this._AdminAuthService.isAdmine)
  }

}
