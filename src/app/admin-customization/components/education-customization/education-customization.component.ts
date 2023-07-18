import { EducationInfoService } from './../../../services/education-info.service';
import { NgForm } from '@angular/forms';
import { EducationInfo } from './../../../interfaces/education-info';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-education-customization',
  templateUrl: './education-customization.component.html',
  styleUrls: ['./education-customization.component.scss']
})
export class EducationCustomizationComponent implements OnInit {
  @ViewChild("myForm") form!:NgForm
  edocationData:EducationInfo[]=[]
  educationId:string = ''
  editMode:boolean = false
  constructor(private _EducationInfoService:EducationInfoService) { }
   createEducationInfo(form:EducationInfo){
    if(!this.editMode){
      this._EducationInfoService.postEducationData(form).subscribe((res)=>{
        this.fetchEducationData()
      })
    }else{
      this._EducationInfoService.updateEducationData(this.educationId,this.form.value).subscribe((res)=>{
        this.fetchEducationData()
      })
    }

   }

   fetchEducationData(){
    this._EducationInfoService.fetchEducationData().subscribe((res)=>{
      this.edocationData = res
      console.log(this.edocationData)
    })
   }


   onDataUpdated(id:string){
    this.educationId = id
    this.editMode = true
    let updatedItem = this.edocationData.find((item)=>{
     return item.id === id
    })

    this.form.setValue({
      startDate:updatedItem?.startDate,
      endDate:updatedItem?.endDate,
      education:updatedItem?.education,
      educationPlace:updatedItem?.educationPlace,
      description:updatedItem?.description
    })
   }


   deleteEducationItem(id:string){
    this._EducationInfoService.deleteEducationData(id).subscribe((res)=>{
      this.fetchEducationData()
    })
   }
  ngOnInit(): void {
    this.fetchEducationData()
  }

}
