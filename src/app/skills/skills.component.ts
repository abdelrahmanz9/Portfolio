import { SkillData } from './../interfaces/skill-data';
import { SkillDataService } from './../services/skill-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']

})
export class SkillsComponent implements OnInit {

  constructor( private _SkillDataService:SkillDataService) { }
  skills:SkillData[] = []
  ngOnInit(): void {
    this._SkillDataService.fetchSkillData().subscribe((res)=>{
      this.skills = res
    })
  }

}
