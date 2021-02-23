import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  cards =['Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥'];
  ngOnInit(): void {}
  isDisplay = false;
  onClick(){
    this.isDisplay = !this.isDisplay;
  }
}
