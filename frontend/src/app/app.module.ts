import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { GenderFilterPipe } from './components/data/data.filters';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DataComponent,
        GenderFilterPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
