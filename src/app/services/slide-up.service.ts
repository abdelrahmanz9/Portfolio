import { Injectable } from '@angular/core';
declare let $:any
@Injectable({
  providedIn: 'root'
})



export class SlideUpService {

  constructor() { }

  slide(){
    $('.slide').show()

    $(document).ready()(
      $('.slide').slideUp(500)
    )
}
}
