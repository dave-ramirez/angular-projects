import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesServices } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino: string;
  index: number;

  constructor(private _activateRoute: ActivatedRoute, 
              private _heroeService: HeroesServices) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.index = params['termino'].idx;
      this.heroes = this._heroeService.buscarHeroe(params['termino']);
      console.log(this.heroes)
    })
  }

} 
