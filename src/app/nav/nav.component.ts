import { SlideUpService } from './../services/slide-up.service';
import { Component, OnInit } from '@angular/core';




declare let $:any
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers:[SlideUpService]
})
export class NavComponent implements OnInit {
  slide(){
    $('.slide').show()

    $(document).ready()(
      $('.slide').slideUp(500)
    )
}
  constructor(private _SlideUpService:SlideUpService) { }

  GoSlide(){
      this._SlideUpService.slide()
    }
  ngOnInit(): void {


  }

}
