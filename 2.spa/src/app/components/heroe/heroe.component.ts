import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private _activateRoute: ActivatedRoute,
              private _heroesServices: HeroesServices) { 

    this._activateRoute.params.subscribe(params => {
      this.heroe = this._heroesServices.getHeroe(params['id']);
      console.log(this.heroe)
    });

  }

  ngOnInit() {
  }

}
