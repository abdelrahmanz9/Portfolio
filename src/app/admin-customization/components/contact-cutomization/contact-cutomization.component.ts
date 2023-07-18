import { NgForm } from '@angular/forms';
import { ContactDataService } from './../../../services/contact-data.service';
import { Contact } from './../../../interfaces/contact';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-contact-cutomization',
  templateUrl: './contact-cutomization.component.html',
  styleUrls: ['./contact-cutomization.component.scss']
})
export class ContactCutomizationComponent implements OnInit {

  constructor(private _ContactDataService:ContactDataService) { }
  contactData:Contact = <Contact>{}
  editMode:boolean = false
  myFlag:boolean = false
  @ViewChild("myForm") form!:NgForm

  createContactData(myForm:Contact){
    if(!this.editMode){
      this._ContactDataService.postContactData(myForm).subscribe((res)=>{
        this. fetchContactData()
        this.myFlag = false
       })
    }
    else{
      this._ContactDataService.updateContactData(this.contactData.id , this.form.value).subscribe((res)=>{
        this.fetchContactData()
        this.myFlag = false
      })
    }

  }

  fetchContactData(){
    this._ContactDataService.fetchContactData().subscribe((res)=>{
      this.contactData = res[0]
      console.log(this.contactData)
    })
  }

  onContactDataUpdated(){
    this.myFlag = true
    this.editMode=true
    console.log(this.contactData)



  }
  ngOnInit(): void {
    this.fetchContactData()
  }

}
