import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-connect-socket',
  templateUrl: './connect-socket.component.html',
  styleUrls: ['./connect-socket.component.scss']
})
export class ConnectSocketComponent implements OnInit {
  private _docSub: Subscription;

  constructor(
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
    this.documentService.getSocketID()
  }
  ngOnDestroy() {
    this._docSub.unsubscribe();
  }
  startGame() {
    this.documentService.letStart()
  }
}
