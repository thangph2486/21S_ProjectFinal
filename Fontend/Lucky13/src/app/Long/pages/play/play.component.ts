import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  private _docSub: Subscription;

  constructor(
    public cardDataService: CardDataService
  ) { }

  ngOnInit(): void {
    this.cardDataService.getSocketID()
  }
  letStart() {
    this.cardDataService.isPlaying = true
    this.cardDataService.letStart()
  }
  ngOnDestroy() {
    this._docSub.unsubscribe();
  }
}
