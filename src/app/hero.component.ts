import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
selector: 'app-hero',
templateUrl: 'hero.component.html',
 styleUrls: ['hero.component.css']
})

export class HeroComponent{
    title ='Hero';
    hero: Hero = new Hero();
    heroes: Hero[] = HEROES;


     changeHero(hero: Hero): void{
        this.hero = hero;
        console.log('change Hero'+hero.name);


    }
}


/*
class Hero{
id: number;
name: String;
}*/
