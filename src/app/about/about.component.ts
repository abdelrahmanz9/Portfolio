import { GetCustomDataService } from './../services/get-custom-data.service';
import { PersonalInfo } from 'src/app/interfaces/personal-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers:[GetCustomDataService]
})
export class AboutComponent implements OnInit {

  constructor(private MyHttps:GetCustomDataService) { }
  personalData:PersonalInfo = <PersonalInfo>{}
  fetchPersonalData(){
    this.MyHttps.fetchPersonalData().subscribe((res)=>{
      this.personalData = res[0]


    })
  }

  ngOnInit(): void {
    this.fetchPersonalData()
  }

}
