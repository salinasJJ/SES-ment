import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Data } from '../models/data.model';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    url = 'http://localhost:3000/api'

    constructor(private http: HttpClient) { }

    create(data: Data): Observable<any> {
        return this.http.post(this.url, data)
    }

    read(): Observable<any> {
        return this.http.get(this.url)
    }

    update(data: Data): Observable<any> {
        return this.http.put(
            `${this.url}/${data.id}`, 
            data,
        )
    }

    delete(data: Data): Observable<any> {
        return this.http.delete(
            `${this.url}/${data.id}`
        )
    }
}
