import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesServices } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];

  constructor(private _heroesServices: HeroesServices,
              private _router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroe(idx) {
    this._router.navigate(['heroe', idx])
  }

}
