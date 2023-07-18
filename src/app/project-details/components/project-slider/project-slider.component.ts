import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.scss']
})
export class ProjectSliderComponent implements OnInit {

  constructor() { }
 @Input() supImages:string[]=[]


  ngOnInit(): void {

  }

}
