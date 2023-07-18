import { NgForm } from '@angular/forms';

import { SkillDataService } from './../../../services/skill-data.service';
import { SkillData } from './../../../interfaces/skill-data';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills-cutomization',
  templateUrl: './skills-cutomization.component.html',
  styleUrls: ['./skills-cutomization.component.scss']
})
export class SkillsCutomizationComponent implements OnInit {

  constructor(private _SkillDataService:SkillDataService) { }

  @ViewChild("myForm") form!:NgForm
  skillData:SkillData[] = []
  editMode:boolean = false
  skillId:string = ""


  createSkill(form:SkillData){
    if(!this.editMode){
      this._SkillDataService.postSkillData(form).subscribe((res)=>{
        this.form.reset()
        this.fetchSkillData()
      })
    }else{
      this._SkillDataService.updateSkillData(this.skillId , form).subscribe((res)=>{
        this.form.reset()
        this.fetchSkillData()
        this.editMode = false
      })
    }

  }

  fetchSkillData(){
    this._SkillDataService.fetchSkillData().subscribe((res)=>{
      this.skillData = res

    })
  }

  updateSkillData(id:string,form:SkillData){
   this._SkillDataService.updateSkillData(id , form).subscribe((res)=>{

   })
  }

  onUpdateSkillData(id:string){
    this.editMode = true
    this.skillId = id
    let skill = this.skillData.find((skill)=>{
      return skill.id === id
    })

    this.form.setValue({
      skillName : skill?.skillName,
      percentage: skill?.percentage,
    })
  }

  deleteSkillData(id:string){
    this._SkillDataService.deleteSkillData(id).subscribe((res)=>{
      this.fetchSkillData()
    })
  }

  

  ngOnInit(): void {
    this.fetchSkillData()

  }

}
