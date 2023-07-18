import { HomeDataService } from './../services/home-data.service';
import { HomeData } from './../interfaces/home-data';
import { Component, OnInit } from '@angular/core';
import { SlideUpService } from '../services/slide-up.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _SlideUpService:SlideUpService , private _HomeDataService:HomeDataService) { }
  homeData:HomeData = <HomeData>{}
  goSlide(){
    this._SlideUpService.slide()
  }


  fetchHomeData(){
    this._HomeDataService.fetchHomeData().subscribe((res)=>{
      this.homeData = res[0]
      console.log(this.homeData.personalPhoto)
    })
  }

  ngOnInit(): void {
    this.fetchHomeData()

  }

}
