import { Component, OnInit } from '@angular/core';
import { ClimateService } from 'src/app/services/climate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  city = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError= false;


  constructor(private _climateServices: ClimateService) { }

  ngOnInit(): void {
  }
  getClimate(){
    this.query = false;
    this.loading= true;
    //console.log(this.city);
    this._climateServices.getClimate(this.city).subscribe(data=>{
      //console.log(data);
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp -273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;

    }, error =>{
      console.log(error);
      this.loading = false;
      this.error();
    })
  }
  error(){
    this.mostrarError= true;
    setTimeout(()=>{
this.mostrarError = false;
this.city = '';
    }, 3000);
  }

}
