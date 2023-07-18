import { PersonalInfo } from './../../../interfaces/personal-info';
import { NgForm } from '@angular/forms';
import { GetCustomDataService } from './../../../services/get-custom-data.service';

import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-info-cutomization',
  templateUrl: './personal-info-customization.component.html',
  styleUrls: ['./personal-info-customization.component.scss']
})
export class PersonalInfoCustomizationComponent implements OnInit {

  constructor(private MyHttps:GetCustomDataService) { }
  @ViewChild("myForm") form!:NgForm

  personalInfo: PersonalInfo = <PersonalInfo>{}
  editMode:boolean = false
  personalId:string = ""
  myFlag:boolean = true

  createPersonalData(info:PersonalInfo ){
    if(!this.editMode){
      this.MyHttps.PostPersonalData(info).subscribe((res)=>{
        this.fetchPersonalData()
        this.myFlag = false

      })

    }else{
      this.MyHttps.updatePersonalData(this.personalId , this.form.value).subscribe((res)=>{

        this.fetchPersonalData()
        this.myFlag = false


      })
    }


  }

  fetchPersonalData(){
    this.MyHttps.fetchPersonalData().subscribe((res)=>{
      this.personalInfo = res[0]




    })
  }

  updateInfo(id:string){




    this.myFlag = true
    this.personalId = id
    this.editMode = true

    console.log(this.myFlag)





  }



  ngOnInit(): void {

    this.MyHttps.fetchPersonalData().subscribe((res)=>{
      this.personalInfo = res[0]
      this.myFlag = !this.personalInfo?true:false
    })


  }

}
