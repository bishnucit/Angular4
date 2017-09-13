import { Component } from '@angular/core';
import { Http,Response } from  '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http){}
  cityName="";
  cityHumid="";
  searchCity(){
    this.http.get("http://api.openweathermap.org/data/2.5/weather?APPID=Your_api_key&q="+ this.cityName)
    .subscribe(
      (res: Response)=>{
        const weatherCity= res.json();
        console.log(weatherCity);
        this.cityHumid=weatherCity.main.humidity

      }
    )

  }
  title = 'app';
}
