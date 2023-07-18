import { Contact } from './../interfaces/contact';
import { ContactDataService } from './../services/contact-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _ContactDataService:ContactDataService) { }
  ContactData:Contact = <Contact> {}
  contactForm:FormGroup = new FormGroup({
    name:new FormControl(null ,[Validators.required , Validators.minLength(3),Validators.maxLength(15)]),
    email:new FormControl(null,[Validators.required , Validators.email ]),
    subject:new FormControl(null,[Validators.required ]),
    Message:new FormControl(null,[Validators.required ]),
  })

  submitForm(formInfo:FormGroup){
    console.log(formInfo)
  }

  fetchContactData(){
    this._ContactDataService.fetchContactData().subscribe((res)=>{
      this.ContactData = res[0]
    })
  }
  ngOnInit(): void {
    this.fetchContactData()
  }

}
