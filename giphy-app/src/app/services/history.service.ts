import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HistoryService implements OnInit {
  historial: any[] = []

  constructor() {
    
  }

  ngOnInit(): void {
  }

  getData(): void{
    let temp = window.localStorage.getItem("Historial") || "aaa";
    this.historial = JSON.parse(temp);
  }

  saveData(){
    window.localStorage.setItem("Historial", JSON.stringify(this.historial))
    console.log(this.historial.toString())
  }
}