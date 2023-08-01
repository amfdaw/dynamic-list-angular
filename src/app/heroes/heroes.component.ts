import { Component } from '@angular/core';
import { HeroInterface } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  heroes = HEROES;
  selectedHero?: HeroInterface;

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
  }
}
