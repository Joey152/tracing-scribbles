import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SketchComponent } from './sketch/sketch.component';
import { HomeComponent } from './home.component';
import { BrowseComponent } from './browse/browse.component';
import { AuthGuard } from '../auth/auth.guard';
import { GameComponent } from './game/game.component';
import { HighscoresComponent } from './highscores/highscores.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'sketch', component: SketchComponent },
            { path: 'browse', component: BrowseComponent },
            { path: 'game', component: GameComponent },
            { path: 'highscores', component: HighscoresComponent },
            { path: '', redirectTo: 'sketch', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
