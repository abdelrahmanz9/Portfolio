import { EducationInfo } from './../interfaces/education-info';
import { EducationInfoService } from './../services/education-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {

  constructor(private _EducationInfoService:EducationInfoService) { }

  educationInfos:EducationInfo[] = []
  fetchEducationData(){
    this._EducationInfoService.fetchEducationData().subscribe((res)=>{
      this.educationInfos = res
      console.log(this.educationInfos)
    })
  }
  ngOnInit(): void {
    this.fetchEducationData()
  }

}
