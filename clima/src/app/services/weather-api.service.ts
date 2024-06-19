import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

    api_key:string = '13dc7b5fa5931e769c3cba13b5aee73d'
    api_key_geo:string = '659dff2454d14d5d938a907ec33f68c5'
  constructor(private http: HttpClient) { }

  getData(city:string){
    const url:string =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}`
    return this.http.get(url)

  }
  getDataGeo(){
    const url:string = 'https://api.ipgeolocation.io/ipgeo?apiKey=659dff2454d14d5d938a907ec33f68c5'
    return this.http.get(url)
  }


}
