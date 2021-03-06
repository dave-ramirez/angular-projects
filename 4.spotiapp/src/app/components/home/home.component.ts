import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
    console.log('constructor del home hecho')
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( paises => {
      console.log(paises)
    });
   }

  ngOnInit() {
  }

}
