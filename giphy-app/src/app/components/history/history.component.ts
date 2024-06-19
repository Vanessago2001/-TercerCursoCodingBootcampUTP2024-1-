import { Component } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  historyData: any[] = []
  constructor(private historyService: HistoryService){}

  ngOnInit(): void {
    this.historyService.getData();
    this.historyData = this.historyService.historial
  }


}
