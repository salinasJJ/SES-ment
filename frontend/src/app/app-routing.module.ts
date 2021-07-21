import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'data', component: DataComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor(private router: Router) { }

    home_redirect() {
        this.router.navigate(['/home']);
    }

    data_redirect() {
        this.router.navigate(['/data']);
    }
}
