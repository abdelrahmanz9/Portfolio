import { GetCustomDataService } from './../../../services/get-custom-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-badge',
  templateUrl: './admin-badge.component.html',
  styleUrls: ['./admin-badge.component.scss'],
  providers:[GetCustomDataService]

})
export class AdminBadgeComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

}
