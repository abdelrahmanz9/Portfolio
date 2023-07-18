import { ProjectInfo } from './../../../interfaces/project-info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  constructor() { }
  @Input() projectInfo:ProjectInfo= <ProjectInfo>{}
  ngOnInit(): void {
  }

}
