import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
    selector: 'app-hero-page',
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css',
})
export class HeroPageComponent implements OnInit {
    public hero?: Hero;

    constructor(
        private heroesService: HeroesService,
        private activatedRouyte: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRouyte.params
            .pipe(
                // delay(5000),
                switchMap(({ id }) => this.heroesService.getHeroById(id))
            )
            .subscribe((hero) => {
                if (!hero) return this.router.navigate(['/heroes/list']);
                this.hero = hero;
                return;
            });
    }

    goBack(): void {
        this.router.navigateByUrl('heroes/list');
    }
}
