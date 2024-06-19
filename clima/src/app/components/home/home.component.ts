import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response = {
    feels_like: '',
    humidity: '',
    pressure: '',
    temp: ''
  }
  constructor(private weatherService: WeatherApiService){
    const getCities = this.getCity()

  }

  ngOnInit(): void {
    this.getCity()
  }
  searchCity(){
    const information = document.querySelector('.input_city') as HTMLInputElement
    const informationText:string = information.value

    this.weatherService.getData(informationText).subscribe((data:any) =>{
      console.log(data.main)
      this.response.humidity = data.main.humidity
      this.response.feels_like = data.main.feels_like
      this.response.pressure = data.main.pressure
      this.response.temp = data.main.temp

    } )
  }
  getCity(){
    this.weatherService.getDataGeo().subscribe((data:any) => {
      this.weatherService.getData(data.city).subscribe((data:any) =>{
      console.log(data)
      this.response.humidity = data.main.humidity
      this.response.feels_like = data.main.feels_like
      this.response.pressure = data.main.pressure
      this.response.temp = data.main.temp


      /// qui mo
      document.write('Holiiiiiiis')
      
  
      })
    })
  }
  
  
}
