import {Component, Input} from '@angular/core';
import { Hero } from './hero';

@Component({
selector: 'app-hero-detail',
template: '<h1>Hero detail {{hero.name}} </h1><button (click)="print()">Click</button>'

})
export class HeroDetailComponent {
    @Input() hero: Hero;

    print() {
        console.log("AAA:", this.hero);
    }
}

