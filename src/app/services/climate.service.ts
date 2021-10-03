import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {
  url= 'https://api.openweathermap.org/data/2.5/weather?q=';
  url1 = '&appid=';
  key= '98ac16d80ca9ba8e414ad0bf2855f6de';

  constructor(private http: HttpClient) {
    
   }
   //metodo obtener clima
   getClimate(city: string): Observable <any>{
     const URL = this.url + city + this.url1+ this.key ;
     return this.http.get(URL);
  }
}
