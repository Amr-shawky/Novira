import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { Dashboard } from './components/student/dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'profile', component: Dashboard },
    { path: '**', component: Notfound },
];
