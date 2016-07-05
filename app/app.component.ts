import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component"
import {HeroService} from "./hero.service";



@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span>
        {{hero.name}}
      </li>
    </ul>

     <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
    directives:[HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit{
    constructor(private heroService:HeroService){}

    ngOnInit() {
        this.getHeroes();
    }

    title = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }
}
