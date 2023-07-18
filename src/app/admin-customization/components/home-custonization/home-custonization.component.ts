import { NgForm } from '@angular/forms';
import { HomeDataService } from './../../../services/home-data.service';
import { HomeData } from './../../../interfaces/home-data';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-custonization',
  templateUrl: './home-custonization.component.html',
  styleUrls: ['./home-custonization.component.scss']
})
export class HomeCustonizationComponent implements OnInit {

  constructor(private _HomeDataService:HomeDataService ) { }
  homeData:HomeData = <HomeData>{}
  myFlag:boolean = true
  editMode:boolean =false
  homeDataId:string  = ""
  @ViewChild("myForm") form!:NgForm
  createPersonalData(form:HomeData){
    if(!this.editMode){
      this._HomeDataService.postHomeData(form).subscribe((res)=>{
        this.fetchHomeData()
        this.myFlag = false

      })
    }else{
      this._HomeDataService.updateHomeData(this.homeDataId, this.form.value).subscribe((res)=>{
        this.fetchHomeData()
        this.myFlag = false
      })
    }


  }

  fetchHomeData(){
    this._HomeDataService.fetchHomeData().subscribe((res)=>{
      this.homeData = res[0]
    })
  }

  updateHomeData(id:string){
    this.myFlag = true
    this.editMode = true
    this.homeDataId = id
  }

  ngOnInit(): void {
    this._HomeDataService.fetchHomeData().subscribe((res)=>{
      this.homeData = res[0]
      this.myFlag = !this.homeData?true:false
    })

  }



}
